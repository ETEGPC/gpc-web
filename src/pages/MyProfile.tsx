import { Menu } from '../components/Exports';
import '../styles/pages/myProfile.css';
import { Link } from 'react-router-dom';
import { CloseMenu } from '../components/Menu';

export function MyProfile(){

	document.title = 'ETE GPC | Meu perfil';

	return(

		<div className="container">

			<Menu />

			<div className="myProfile-container" onClick={CloseMenu}>			

				<h1 className="container-title">Meu perfil</h1>				

				<div className="my-datas">


					<h2 className="container-h2">Nome e sobrenome</h2>
					<p className="container-p">Emailexemplo@gmail.com</p>

					<Link className="continer-link" to="/redefinirSenha">Redefinir senha</Link>

				</div>


				<button className="container-button">Sair</button>

			</div>
			


		</div>

	);
}