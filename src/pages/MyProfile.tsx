import { Menu } from '../components/Exports';
import '../styles/pages/myProfile.css';
import { Link } from 'react-router-dom';
import { CloseMenu } from '../components/Menu';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import api from '../services/api';

interface IParent {
	fullName: string,
	email: string
}

export function MyProfile() {
	const [parent, setParent] = useState<IParent>();

	document.title = 'ETE GPC | Meu perfil';
	const removeCookie = useCookies(['token'])[2];
	const cookie = useCookies(['token'])[0];
	const parentId = localStorage.getItem('parentId');

	async function getParentInfo() {
		await api.http.get(`parent/${parentId}`, {
			headers: {
				'x-access-token': cookie.token
			}
		}).then(resp => {
			setParent(resp.data);
		}).catch(err => {
			console.error(err);
			alert('Houve um erro ao recuperar suas informações. Tente sair de sua conta e entrar novamente.');
		})
	}

	function handleDeleteToken() {
		removeCookie('token');
		localStorage.clear();
	}

	useEffect(() => {
		getParentInfo();
		console.log('Oi')
	}, [])

	return (

		<div className="container">

			<Menu />

			<div className="myProfile-container" onClick={CloseMenu}>

				<h1 className="container-title">Meu perfil</h1>

				<div className="my-datas">


					<h2 className="container-h2">{parent?.fullName ? parent.fullName : '...'}</h2>
					<p className="container-p">{parent?.email ? parent.email : '...'}</p>

					<Link className="continer-link" to="/redefinirSenha">Redefinir senha</Link>

				</div>


				<button className="container-button" onClick={handleDeleteToken}>Sair</button>

			</div>



		</div>

	);
}