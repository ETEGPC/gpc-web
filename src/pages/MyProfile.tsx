import { Menu } from '../components/Exports';
import '../styles/pages/myProfile.css';
import  pic  from '../images/pic.svg';
import  greenArrow  from '../images/icons/greenArrow_icon.svg';
import  trash  from '../images/icons/trash_icon.svg';
import  picIcon  from '../images/icons/pic_icon.svg';
import  camera  from '../images/icons/camera_icon.svg';

export function MyProfile(){

	function OpenPicMenu(){
		let picMenu:any = document.getElementById('profile-pic');
		let restOfpage:any = document.getElementById('restOfPage');
		picMenu.style.transform = 'translateY(0%)';
		restOfpage.style.filter = 'blur(4px)';
	}

	function ClosePicMenu(){
		let picMenu:any = document.getElementById('profile-pic');
		let restOfpage:any = document.getElementById('restOfPage');
		picMenu.style.transform = 'translateY(100%)';
		restOfpage.style.filter = 'blur(0px)';
		
	}

	return(

		<div className="myProfile-container">

			<Menu />

			<div  id="restOfPage">
				

				<h1 className="myProfile-h1">Meu perfil</h1>

				<div className="myProfile-subcontainer">
					<img src={pic} alt="" className="myProfile-subcontainer-pic" />
					<button className="myProfile-subcontainer-button"><img onClick={OpenPicMenu} src={camera} alt="" className="myProfile-subcontainer-button-img" /></button>
				</div>


				<h2 className="myProfile-container-h2">Nome e sobrenome</h2>
				<p className="myProfile-container-p">Emailexemplo@gmail.com</p>


				<button className="myProfile-container-button">Sair</button>

			</div>

			<div className="profile-pic" id="profile-pic">

				<header className="profile-pic-header">
					<img onClick={ClosePicMenu} src={greenArrow} alt="" className="profile-pic-arrow-img" />
					<h3 className="profile-pic-h3">Foto de perfil</h3>
				</header>

				<section className="profile-pic-section">


					<div className="trash">
						<button className="profile-pic-button1"><img src={trash} alt="" className="profile-pic-button1-img" /></button>
						<p className="profile-pic-p1">Remover foto</p>
					</div>

					<div className="change">
						<button className="profile-pic-button2"><img src={picIcon} alt=""  className="profile-pic-button2-img"/></button>
						<p className="profile-pic-p2">Alterar foto</p>
					</div>
				</section>


			</div>

		</div>

	);
}