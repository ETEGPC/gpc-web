import { Menu } from '../components/Exports';
import '../styles/pages/myProfile.css';

export function MyProfile(){


	return(

		<div className="myProfile-container">

			<Menu />

			<div>
				

				<h1 className="myProfile-h1">Meu perfil</h1>			

			

				<h2 className="myProfile-container-h2">Nome e sobrenome</h2>
				<p className="myProfile-container-p">Emailexemplo@gmail.com</p>


				<button className="myProfile-container-button">Sair</button>

			

			</div>
			


		</div>

	);
}