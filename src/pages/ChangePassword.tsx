import { Menu } from '../components/Menu';
import '../styles/pages/changePassword.css';
import { CloseMenu } from '../components/Menu';
import { useState } from 'react';
import api from '../services/api';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

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
			alert('As senhas dos campos nova senha e confirmar senha não conferem.');
			return
		};

		if (data.newPassword === '') {
			alert('O campo nova senha não pode ser nulo.');
			return
		};


		await api.http.patch(`/update-parent/${parentId}`, {
			...data
		}, {
			headers: {
				'x-access-token': cookie.token
			}
		}).then(resp => {
			if (resp.status === 200) {
				setCookie('token', resp.data.token);
				alert('Senha alterada com sucesso.');
				navigate('/');

			} else {
				alert('Houve um erro ao alterar sua senha.')
			}

		}).catch(err => {
			console.error(err);
			alert('Houve um erro ao atualizar sua senha. Tente novamente mais tarde.')
		})
	};

	return (

		<div className="container">

			<Menu />

			<div className="changePassword-container" onClick={CloseMenu}>

				<h1 className="container-title">Redefinir senha</h1>

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