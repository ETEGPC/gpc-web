import '../styles/pages/loginScreen.css';
import eteLogo from '../images/eteLogo.svg';
import '../styles/global.css'
import { Link } from "react-router-dom";


export function LoginScreen(){

	document.title = "Login";

	return(

		<div className="loginScreen-container">

			<div className="welcome-screen">

				<h3 className="welcome-screen-h3">Olá, seja bem vindo novamente!</h3>
				<h3 className="welcome-screen-h3">Quer ficar por dentro de tudo que está acontecendo em nossa escola? O que está esperando? Entre com seu usuário e senha.</h3>
				<h3 className="welcome-screen-h3">O GP faz a diferença!</h3>

			</div>

			<div className="login-form">

				<h1 className="form-h1">Olá, seja bem-vindo!</h1>


				<img className="form-img eteLogo" src={eteLogo} />

				<div className="form-datas">			

					<div className="form-email">
						<input  className="email-input" required/>
						<label className="email-label">E-mail</label>
					</div>

					<div className="form-password">
						<input  className="password-input" required/>
						<label className="password-label">Senha</label>
					</div>

				</div>

				<button className="form-button">Entrar</button>

			</div>		

		</div>
	);

}