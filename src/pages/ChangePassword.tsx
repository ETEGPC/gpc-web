import { Menu } from '../components/Menu';
import '../styles/pages/changePassword.css';
import { CloseMenu } from '../components/Menu';
import { useState } from 'react';
import api from '../services/api';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export function ChangePassword() {
	const [password, setPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmNewPassword, setConfirmNewPassword] = useState('');
	const parentId = localStorage.getItem('parentId');
	const [cookie, setCookie] = useCookies(['token']);
	const navigate = useNavigate();

	async function handleChangePassword() {
		const data = {
			password,
			newPassword
		}

		if (data.newPassword !== confirmNewPassword) {
			toast('As senhas dos campos nova senha e confirmar senha não conferem.', {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				type: 'error',
			});
			return
		};

		if (data.newPassword === '') {
			toast('O campo nova senha não pode ser nulo.', {
				position: "bottom-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				type: 'error',
			});
			return
		};


		const reqStatus = toast.loading('Carregando...', {
			position: 'bottom-right'
		});

		await api.http.patch(`/update-parent/${parentId}`, {
			...data
		}, {
			headers: {
				'x-access-token': cookie.token
			}
		}).then(resp => {
			if (resp.status === 200) {
				setCookie('token', resp.data.token);
				toast.update(reqStatus, {
					render: 'Senha alterada com sucesso.',
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
				navigate('/');

			} else {
				toast.update(reqStatus, {
					render: 'Houve um erro ao atualizar sua senha. Tente novamente mais tarde.',
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
			}

		}).catch(err => {
			console.error(err);
			toast.update(reqStatus, {
				render: 'Houve um erro ao atualizar sua senha. Tente novamente mais tarde.',
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
		})
	};

	return (

		<div className="container">

			<Menu />

			<div className="changePassword-container" onClick={CloseMenu}>


				<h2 className="container-subTitle">Preencha os campos abaixo para alterar a sua senha atual</h2>

				<div className="changePassword-datas">


					<div className="new-password">

						<input required className="content-newPassword-input"
							onChange={e => {
								setPassword(e.target.value);
							}}
						/>
						<label className="content-newPassword">Digite a senha antiga</label>

					</div>

					<div className="confirm-password">

						<input required className="content-newPassword-input-confirm"
							onChange={e => {
								setNewPassword(e.target.value);
							}}
						/>
						<label className="content-newPassword-confirm">Digite a senha nova</label>

					</div>

					<div className="confirm-password">

						<input required className="content-newPassword-input-confirm"
							onChange={e => {
								setConfirmNewPassword(e.target.value);
							}}
						/>
						<label className="content-newPassword-confirm">Confirme sua senha</label>

					</div>

				</div>

				<button className="changePassword-button" onClick={handleChangePassword}>Alterar senha</button>

			</div>

		</div>

	);

}