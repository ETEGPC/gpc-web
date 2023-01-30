import { Menu } from '../components/Menu';
import '../styles/pages/changePassword.css';
import { CloseMenu } from '../components/Menu';

export function ChangePassword(){

	return(

		<div className="container">
			
			<Menu />

			<div className="changePassword-container" onClick={CloseMenu}>

				<h1 className="container-title">Redefinir senha</h1>
				
				<h2 className="container-subTitle">Preencha os campos abaixo para alterar a sua senha atual</h2>

				<div className="changePassword-datas">

					<div className="new-password">
						
						<input required className="content-newPassword-input" />
						<label className="content-newPassword">Digite a nova senha</label>

					</div>

					<div className="confirm-password">

						<input required className="content-newPassword-input-confirm" />					
						<label className="content-newPassword-confirm">Confirme sua senha</label>

					</div>

				</div>

				<button className="changePassword-button">Alterar senha</button>

			</div>

		</div>

	);

}