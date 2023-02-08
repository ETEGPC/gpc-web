import { Link } from 'react-router-dom'
import menuIcon from '../images/icons/menu_icon.svg'
import '../styles/components/Menu.css';
import whiteArrow from '../images/icons/whiteArrow_icon.svg'
import user from '../images/icons/user_icon.svg'
import latestNews from '../images/icons/latestNews_icon.svg'
import bulletinBoard from '../images/icons/bulletinBoard_icon.svg'
import schedule from '../images/icons/schedule_icon.svg'
import chat from '../images/icons/chat_icon.svg'
import download from '../images/icons/download_icon.svg'
import instagram from '../images/icons/instagram_icon.svg'
import whatsapp from '../images/icons/whatsapp_icon.svg'
import email from '../images/icons/email_icon.svg'
import timeline from '../images/icons/timeline_icon.svg'
import documents from '../images/icons/documents_icon.svg'
import termOfUse from '../images/icons/termsOfUse_icon.svg'
import privacyPolicy from '../images/icons/privacyPolicy_icon.svg'
import initialPage from '../images/icons/initialPage_icon.svg'
import eteLogo from '../images/eteLogo.svg';
import { useState } from 'react';

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
					<button onClick={CloseMenu} className="menu-header-button"><img className="menu-header-img" id="menu-header-img" alt="Ícone do menu" src={whiteArrow} /></button>
					<h1 className="menu-header-h1">Menu</h1>

				</header>

				<main className="menu-main">

					{!navigator.userAgent.includes('iPhone') && canInstall?
						<></>
						:
						<div onClick={installPwa} className="install-app-container">
							<img src={download} alt="Ícone da página inicial" />
							<button style={{ marginLeft: 10, backgroundColor: '#1270B0' }}>
								<p className='install-app-label'>Instalar aplicativo</p>
							</button>
						</div>
					}

					<div className="menu-component-0">
						<img src={initialPage} alt="Ícone da página inicial" />
						<Link to="/paginaInicial">Página inicial</Link>
					</div>

					<div className="menu-component-1">
						<img src={user} alt="Ícone da página meu perfil" />
						<Link to="/meuPerfil">Meu perfi</Link>
					</div>


					<div className="menu-component-2">
						<img src={latestNews} alt="Ícone da página últimas notícias" />
						<Link to="/ultimasNoticias">Últimas notícias</Link>
					</div>


					<div className="menu-component-3">
						<img src={bulletinBoard} alt="Ícone da página mural de avisos" />
						<Link to="/muralDeAvisos">Mural de avisos</Link>
					</div>


					<div className="menu-component-4">
						<img src={schedule} alt="Ícone da página nossa agenda" />
						<Link to="/nossaAgenda">Nossa agenda</Link>
					</div>


					<div className="menu-component-5">
						<img src={chat} alt="Ícone da página chat" />
						<Link to="/chat">Chat</Link>
					</div>


					<div className="menu-component-7">
						<img src={instagram} alt="Ícone do Instagram" />
						<Link onClick={openInstagram} to="#">Instagram</Link>
					</div>


					<div className="menu-component-8">
						<img src={whatsapp} alt="Ícone do WhatsApp" />
						<Link onClick={openWhatsApp} to="#">WhatsApp</Link>
					</div>


					<div className="menu-component-9">
						<img src={email} alt="Ícone do e-mail" />
						<Link to="#" onClick={openEmail}>E-mail</Link>
					</div>


					<div className="menu-component-10">
						<img src={timeline} alt="Ícone da página quadro de horários" />
						<Link to="/quadroDeHorarios">Quadro de horários</Link>
					</div>


					<div className="menu-component-11">
						<img src={documents} alt="Ícone da página solicitação de documentos" />
						<Link to="/solicitacaoDeDocumentos">Solicitação de documentos</Link>
					</div>

					<hr />

					<div className="menu-component-12">
						<img src={termOfUse} alt="Ícone da página termos de uso" />
						<Link to="#">Termos de uso</Link>
					</div>

					<div className="menu-component-13">
						<img src={privacyPolicy} alt="Ícone da página política de privacidade" />
						<Link to="#">Política de privacidade</Link>
					</div>

				</main>

			</div>


			<div className="menu-closed">
				<button onClick={OpenMenu} className="menu-button"><img className="menu-img-menu" src={menuIcon} alt="Ícone do menu" /></button>
				<img className="menu-img-gp" src={eteLogo} alt="Ícone da ETE" />
				<h2 className="menu-school-title">ETE Ginásio Pernambucano</h2>
			</div>

			<div className="desktop-menu">

				<main className="desktop-menu-main">

					<div className="desktop-menu-component-0">
						<img src={initialPage} alt="Ícone da página inicial" />
						<Link to="/paginaInicial">Página inicial</Link>
					</div>

					<div className="desktop-menu-component-1">
						<img src={user} alt="Ícone da página meu perfil" />
						<Link to="/meuPerfil">Meu perfi</Link>
					</div>


					<div className="desktop-menu-component-2">
						<img src={latestNews} alt="Ícone da página últimas notícias" />
						<Link to="/ultimasNoticias">Últimas notícias</Link>
					</div>


					<div className="desktop-menu-component-3">
						<img src={bulletinBoard} alt="Ícone da página mural de avisos" />
						<Link to="/muralDeAvisos">Mural de avisos</Link>
					</div>


					<div className="desktop-menu-component-4">
						<img src={schedule} alt="Ícone da página nossa agenda" />
						<Link to="/nossaAgenda">Nossa agenda</Link>
					</div>


					<div className="desktop-menu-component-5">
						<img src={chat} alt="Ícone da página chat" />
						<Link to="/chat">Chat</Link>
					</div>



					<div className="desktop-menu-component-7">
						<img src={instagram} alt="Ícone do Instagram" />
						<Link onClick={openInstagram} to="#">Instagram</Link>
					</div>


					<div className="desktop-menu-component-8">
						<img src={whatsapp} alt="Ícone do WhatsApp" />
						<Link to="#" onClick={openWhatsApp}>WhatsApp</Link>
					</div>


					<div className="desktop-menu-component-9">
						<img src={email} alt="Ícone do e-mail" />
						<Link to="#" onClick={openEmail}>E-mail</Link>
					</div>


					<div className="desktop-menu-component-10">
						<img src={timeline} alt="Ícone da página quadro de horários" />
						<Link to="/quadroDeHorarios">Quadro de horários</Link>
					</div>


					<div className="desktop-menu-component-11">
						<img src={documents} alt="Ícone da página solicitação de documentos" />
						<Link to="/solicitacaoDeDocumentos">Solicitação de documentos</Link>
					</div>

					<hr />

					<div className="desktop-menu-component-12">
						<img src={termOfUse} alt="Ícone da página termos de uso" />
						<Link to="#">Termos de uso</Link>
					</div>

					<div className="desktop-menu-component-13">
						<img src={privacyPolicy} alt="Ícone da página política de privacidade" />
						<Link to="#">Política de privacidade</Link>
					</div>

				</main>

			</div>

		</div>

	);

}
