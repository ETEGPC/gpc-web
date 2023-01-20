import '../styles/pages/loginScreen.css';
import eteLogo from '../images/eteLogo.svg';
import '../styles/global.css';
import { useNavigate } from "react-router-dom";
import api from '../services/api';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export function LoginScreen() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [cookie, setCookie] = useCookies(['token']);
	const navigate = useNavigate();

	document.title = "ETEGPC | Login";

	async function handleLogin() {
		await api.http.post('/parent-login', {
			email,
			password
		}).then(resp => {
			setCookie('token', resp.data.token);
			localStorage.setItem('parentId', resp.data.id);
			localStorage.setItem('schoolClasses', JSON.stringify(resp.data.schoolClasses));
			navigate('/paginainicial');
		}).catch(err => {
			console.error(err);
		});
	};

	useEffect(() => {
		if (cookie.token) {
			navigate('/paginainicial');
		}
	});

	return (
		<div className="loginScreen-container">
			<div className="welcome-screen">

				<h3 className="welcome-screen-h3">Olá, seja bem vindo novamente!</h3>
				<h3 className="welcome-screen-h3">Quer ficar por dentro de tudo que está acontecendo em nossa escola? O que está esperando? Entre com seu usuário e senha.</h3>
				<h3 className="welcome-screen-h3">O GP faz a diferença!</h3>

			</div>

			<div className="login-form">
				<h1 className="form-h1">Olá, seja bem-vindo!</h1>

				<img className="form-img eteLogo" alt='logo-etegpc' src={eteLogo} />

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
			</div>
		</div>
	);
}