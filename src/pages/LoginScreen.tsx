import '../styles/pages/loginScreen.css';
import eteLogo from '../images/eteLogo.png';
import '../styles/global.css'
import userIcon2 from '../images/icons/user2_icon.png';
import passwordIcon from '../images/icons/password_icon.png';
import { Link } from "react-router-dom";


export function LoginScreen(){

	return(

		<div className="loginScreen-container">

			<h1 className="loginScreen-h1">Olá, seja bem-vindo!</h1>


			<img className="loginScreen-img eteLogo" src={eteLogo} />


			<label className="loginScreen-label">Usuário</label>
			<input className="loginScreen-input"  id="loginScreen-input-user" />
			
			<label className="loginScreen-label">Senha</label>
			<input className="loginScreen-input" type="password" />

			<button className="loginScreen-button">Entrar</button>
			
			<Link to="/criarConta" className="loginScreen-link">Criar uma conta</Link>
			<Link className="loginScreen-link" to="#">Entrar sem um login</Link>


		</div>
	);

}