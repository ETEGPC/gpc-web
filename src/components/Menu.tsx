import { Link } from 'react-router-dom'
import '../styles/components/Menu.css';
import eteLogo from '../images/eteLogo.svg';
import { useState } from 'react';

// Import Menu's icons
import { BsChatDots } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi'
import {
 AiOutlineWhatsApp,
 AiOutlineInstagram,
 AiOutlineMail,
 AiOutlineSchedule,
 AiOutlineCalendar,
 AiOutlineFolderOpen,
 AiOutlineBell,
 AiOutlineUser,
 AiOutlineLock,
 AiOutlineFileText,
 AiOutlineHome,
 AiOutlineAlert,
 AiOutlineDownload
 } from 'react-icons/ai';

//export function CloseMenu(){

export function CloseMenu() {

	let menu: any = document.getElementById('menu');
	menu.style.transform = 'translateX(-100%)';

}

export function Menu() {
	let deferredPrompt: any;
	const [canInstall, setCanInstall] = useState(false)

	function OpenMenu() {

		let menu: any = document.getElementById('menu');
		menu.style.transform = 'translateX(0%)';

	}

	function CloseMenu() {
		let menu: any = document.getElementById('menu');
		menu.style.transform = 'translateX(-100%)';
	}

	function openInstagram() {
		window.open('https://www.instagram.com/eteginasiopec/', '_blank');
	}

	function openEmail() {
		window.open('mailto:eteginasiopernambucano@gmail.com', '_blank');

	}

	function openWhatsApp() {
		window.open('https://wa.me/5581997841403', '_blank');
	}

	window.addEventListener('beforeinstallprompt', (e) => {
		e.preventDefault();
		deferredPrompt = e;
		setCanInstall(true)
	});

	function installPwa() {
		deferredPrompt.prompt();
	}


	return (

		<div className="menu-container">
			<div className="menu-open" id="menu">

				<header className="menu-header">
					<button onClick={CloseMenu} className="menu-header-button"><BiArrowBack className="menu-header-img" id="menu-header-img"/></button>
					<h1 className="menu-header-h1">Menu</h1>

				</header>

				<main className="menu-main">

					{!navigator.userAgent.includes('iPhone') && canInstall?
						<></>
						:
						<div onClick={installPwa} className="install-app-container">
							<AiOutlineDownload className="icons"/>
							<button className="install-app-button">
								<p className='install-app-label'>Instalar aplicativo</p>
							</button>
						</div>
					}

					<div className="menu-component-0">
						<AiOutlineHome className="icons" />
						<Link to="/">Página inicial</Link>
					</div>

					<div className="menu-component-1">
						<AiOutlineUser className="icons" />
						<Link to="/meuPerfil">Meu perfil</Link>
					</div>


					<div className="menu-component-2">
						<AiOutlineAlert className="icons" /> 
						<Link to="/ultimasNoticias">Últimas notícias</Link>
					</div>


					<div className="menu-component-3">
						<AiOutlineBell className="icons" />
						<Link to="/muralDeAvisos">Mural de avisos</Link>
					</div>


					<div className="menu-component-4">
						<AiOutlineSchedule className="icons" />
						<Link to="/nossaAgenda">Nossa agenda</Link>
					</div>


					<div className="menu-component-5">
						<BsChatDots className="icons chat-icon"/>
						<Link to="/faq">Chat</Link>
					</div>


					<div className="menu-component-7">
						<AiOutlineInstagram className="icons" />
						<Link onClick={openInstagram} to="#">Instagram</Link>
					</div>


					<div className="menu-component-8">
						<AiOutlineWhatsApp className='icons'/>
						<Link onClick={openWhatsApp} to="#">WhatsApp</Link>
					</div>


					<div className="menu-component-9">
						<AiOutlineMail className="icons" />
						<Link to="#" onClick={openEmail}>E-mail</Link>
					</div>


					<div className="menu-component-10">
						<AiOutlineCalendar className="icons" />
						<Link to="/quadroDeHorarios">Quadro de horários</Link>
					</div>


					<div className="menu-component-11">
						<AiOutlineFolderOpen className="icons" />
						<Link to="/solicitacaoDeDocumentos">Solicitação de documentos</Link>
					</div>

					<hr />

					<div className="menu-component-12">
						<AiOutlineFileText className="icons" />
						<Link to="#">Termos de uso</Link>
					</div>

					<div className="menu-component-13">
						<AiOutlineLock className='icons' />
						<Link to="#">Política de privacidade</Link>
					</div>

				</main>

			</div>


			<div className="menu-closed">
				<button onClick={OpenMenu} className="menu-button"><FiMenu className="menu-img-menu"/></button>
				<img className="menu-img-gp" src={eteLogo} alt="Ícone da ETE" />
				<h2 className="menu-school-title">ETE Ginásio Pernambucano</h2>
			</div>

			<div className="desktop-menu">

				<main className="desktop-menu-main">

					<div className="desktop-menu-component-0">
						<AiOutlineHome className="icons" />
						<Link to="/paginaInicial">Página inicial</Link>
					</div>

					<div className="desktop-menu-component-1">
						<AiOutlineUser className="icons" />
						<Link to="/meuPerfil">Meu perfil</Link>
					</div>


					<div className="desktop-menu-component-2">
						<AiOutlineAlert className="icons" /> 
						<Link to="/ultimasNoticias">Últimas notícias</Link>
					</div>


					<div className="desktop-menu-component-3">
						<AiOutlineBell className="icons" />
						<Link to="/muralDeAvisos">Mural de avisos</Link>
					</div>


					<div className="desktop-menu-component-4">
						<AiOutlineSchedule className="icons" />
						<Link to="/nossaAgenda">Nossa agenda</Link>
					</div>


					<div className="desktop-menu-component-5">
            <BsChatDots className="icons chat-icon"/>
						<Link to="/faq">Chat</Link>
					</div>



					<div className="desktop-menu-component-7">
            <AiOutlineInstagram className="icons" />
						<Link onClick={openInstagram} to="#">Instagram</Link>
					</div>


					<div className="desktop-menu-component-8">
            <AiOutlineWhatsApp className='icons'/>
						<Link to="#" onClick={openWhatsApp}>WhatsApp</Link>
					</div>


					<div className="desktop-menu-component-9">
						<AiOutlineMail className="icons" />
						<Link to="#" onClick={openEmail}>E-mail</Link>
					</div>


					<div className="desktop-menu-component-10">
						<AiOutlineCalendar className="icons" />
						<Link to="/quadroDeHorarios">Quadro de horários</Link>
					</div>


					<div className="desktop-menu-component-11">
						<AiOutlineFolderOpen className="icons" />
						<Link to="/solicitacaoDeDocumentos">Solicitação de documentos</Link>
					</div>

					<hr />

					<div className="desktop-menu-component-12">
						<AiOutlineFileText className="icons" />
						<Link to="#">Termos de uso</Link>
					</div>

					<div className="desktop-menu-component-13">
						<AiOutlineLock className='icons' />
						<Link to="#">Política de privacidade</Link>
					</div>

				</main>

			</div>

		</div>

	);

}
