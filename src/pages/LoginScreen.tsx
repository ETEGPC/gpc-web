import '../styles/pages/loginScreen.css';
import eteLogo from '../images/eteLogo.svg';
import '../styles/global.css';
import { Link, useNavigate } from "react-router-dom";
import api from '../services/api';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { IoArrowBack } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export function LoginScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cookie, setCookie] = useCookies(['token']);
	const navigate = useNavigate();
	const broadcast = new BroadcastChannel('push');

	document.title = "ETE GPC | Login";

	async function handleLogin() {
		const reqStatus = toast.loading('Carregando...', {
			position: 'bottom-right'
		});

		await api.http.post('/parent-login', {
			email,
			password
		}).then(resp => {
			setCookie('token', resp.data.token);
			localStorage.setItem('parentId', resp.data.id);
			let schoolClasses: string[] = []
			resp.data.schoolClasses.map((schoolClass: string) => {
				if (!schoolClasses.includes(schoolClass)) schoolClasses.push(schoolClass);
				return schoolClass;
			})
			localStorage.setItem('schoolClasses', JSON.stringify(schoolClasses));
			broadcast.postMessage({
				parentId: resp.data.id
			});

			toast.dismiss(reqStatus);
			navigate('/');
		}).catch(err => {
			console.error(err);
			toast.update(reqStatus, {
				render: 'Email ou senha incorretos.',
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				type: 'error',
				isLoading: false
			});
		});
	};

	async function forgotPass() {
		const reqStatus = toast.loading('Carregando...', {
			position: 'bottom-right'
		});

		if (!email) {
			toast.update(reqStatus, {
				render: 'Email inserido não é válido.',
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				type: 'error',
				isLoading: false
			});

			return
		}

		await api.http.post('/parents/sendRecoverEmail', {}, {
			params: {
				email
			}
		}).then(resp => {
			toast.update(reqStatus, {
				render: `${resp.data.message}`,
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				type: 'success',
				isLoading: false
			});
		}).catch((err: AxiosError) => {
			const errorMessage = err.response?.data as { message: string }
			toast.update(reqStatus, {
				render: `${errorMessage.message}`,
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				type: 'error',
				isLoading: false
			});
		});
	}

	useEffect(() => {
		if (cookie.token) {
			navigate('/');
		}
	}, []);

	return (
		<div className="loginScreen-container">
			<div className="welcome-screen">


				<h3 className="welcome-screen-h3">Olá, seja bem vindo novamente!</h3>
				<h3 className="welcome-screen-h3">Quer ficar por dentro de tudo que está acontecendo em nossa escola? O que está esperando? Entre com seu e-mail e senha. Ou, caso não tenha uma conta, cadastre-se.</h3>
				<h3 className="welcome-screen-h3">O GP faz a diferença!</h3>

			</div>

			<div className="login-form">
        <header>
				  <Link to={'/'} className="IoArrowBack">
					  <IoArrowBack color='#FFF' size={32} />
				  </Link>

				  <h1 className="form-h1">Olá, seja bem-vindo!</h1>
        </header>

				<Link to={'/'}>
					<img className="form-img eteLogo" alt='logo-etegpc' src={eteLogo} />
				</Link>

				<div className="form-datas">

					<div className="form-email">
						<input
							className="email-input"
							required
							onChange={e => setEmail(e.target.value)}
						/>
						<label className="email-label">E-mail</label>
					</div>

					<div className="form-password">
						<input
							className="password-input"
							required
							type={'password'}
							onChange={e => setPassword(e.target.value)}
						/>
						<label className="password-label">Senha</label>
					</div>

				</div>

				<button className="form-button" onClick={handleLogin}>Entrar</button>

 				<p className='createAccount-redirect-p forgot-pass' onClick={forgotPass}>Esqueci minha senha</p>
				<p className='createAccount-redirect-p'>Não possui uma conta? Crie uma <Link to="/criarConta" className='createAccount-redirect-link'>clicando aqui.</Link></p>
			</div>
		</div>
	);
}
