import { Link } from 'react-router-dom'
import gpIcon from '../images/icons/gp_icon.svg'
import menuIcon from '../images/icons/menu_icon.svg'
import '../styles/components/Menu.css';
import greenArrow from '../images/icons/greenArrow_icon.svg'
import user from '../images/icons/user_icon.svg'
import latestNews from '../images/icons/latestNews_icon.svg'
import bulletinBoard from '../images/icons/bulletinBoard_icon.svg'
import schedule from '../images/icons/schedule_icon.svg'
import chat from '../images/icons/chat_icon.svg'
import instagram from '../images/icons/instagram_icon.svg'
import whatsapp from '../images/icons/whatsapp_icon.svg'
import email from '../images/icons/email_icon.svg'
import timeline from '../images/icons/timeline_icon.svg'
import documents from '../images/icons/documents_icon.svg'
import termOfUse from '../images/icons/termsOfUse_icon.svg'
import privacyPolicy from '../images/icons/privacyPolicy_icon.svg'
import initialPage from '../images/icons/initialPage_icon.svg'

export function CloseMenu() {

	let menu: any = document.getElementById('menu');
	menu.style.transform = 'translateX(-100%)';

}

export function Menu() {

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

	return (
		<div className="menu-container">
			<div className="menu-open" id="menu">

				<header className="menu-header">
					<button onClick={CloseMenu} className="menu-header-button"><img alt="" className="menu-header-img" src={greenArrow} /></button>
					<h1 className="menu-header-h1">Menu</h1>
				</header>

				<main className="menu-main">

					<div className="menu-component-0">
						<img alt="" src={initialPage} />
						<Link to="/paginaInicial">Página inicial</Link>
					</div>

					<div className="menu-component-1">
						<img alt="" src={user} />
						<Link to="/meuPerfil">Meu perfi</Link>
					</div>


					<div className="menu-component-2">
						<img alt="" src={latestNews} />
						<Link to="/ultimasNoticias">Últimas notícias</Link>
					</div>


					<div className="menu-component-3">
						<img alt="" src={bulletinBoard} />
						<Link to={`/muralDeAvisos`} >Mural de avisos</Link>
					</div>


					<div className="menu-component-4">
						<img alt="" src={schedule} />
						<Link to="/nossaAgenda">Nossa agenda</Link>
					</div>


					<div className="menu-component-5">
						<img alt="" src={chat} />
						<Link to="/chat">Chat</Link>
					</div>


					<div className="menu-component-7">
						<img alt="" src={instagram} />
						<Link onClick={openInstagram} to="#">Instagram</Link>
					</div>


					<div className="menu-component-8">
						<img alt="" src={whatsapp} />
						<Link to="#">WhatsApp</Link>
					</div>


					<div className="menu-component-9">
						<img alt="" src={email} />
						<Link to="#">E-mail</Link>
					</div>


					<div className="menu-component-10">
						<img alt="" src={timeline} />
						<Link to="/quadroDeHorarios">Quadro de horários</Link>
					</div>


					<div className="menu-component-11">
						<img alt="" src={documents} />
						<Link to="/solicitacaoDeDocumentos">Solicitação de documentos</Link>
					</div>

					<hr />

					<div className="menu-component-12">
						<img alt="" src={termOfUse} />
						<Link to="#">Termos de uso</Link>
					</div>

					<div className="menu-component-13">
						<img alt="" src={privacyPolicy} />
						<Link to="#">Política de privacidade</Link>
					</div>

				</main>

			</div>


			<div className="menu-closed">
				<button onClick={OpenMenu} className="menu-button"><img alt="" className="menu-img-menu" src={menuIcon} /></button>
				<img alt="" className="menu-img-gp" src={gpIcon} />
				<h2 className="menu-school-title">ETE Ginásio Permanbucano</h2>
			</div>

			<div className="desktop-menu">

				<main className="desktop-menu-main">

					<div className="desktop-menu-component-0">
						<img alt="" src={initialPage} />
						<Link to="/paginaInicial">Página inicial</Link>
					</div>

					<div className="desktop-menu-component-1">
						<img alt="" src={user} />
						<Link to="/meuPerfil">Meu perfi</Link>
					</div>


					<div className="desktop-menu-component-2">
						<img alt="" src={latestNews} />
						<Link to="/ultimasNoticias">Últimas notícias</Link>
					</div>


					<div className="desktop-menu-component-3">
						<img alt="" src={bulletinBoard} />
						<Link to="/muralDeAvisos">Mural de avisos</Link>
					</div>


					<div className="desktop-menu-component-4">
						<img alt="" src={schedule} />
						<Link to="/nossaAgenda">Nossa agenda</Link>
					</div>


					<div className="desktop-menu-component-5">
						<img alt="" src={chat} />
						<Link to="/chat">Chat</Link>
					</div>



					<div className="desktop-menu-component-7">
						<img alt="" src={instagram} />
						<Link onClick={openInstagram} to="#">Instagram</Link>
					</div>


					<div className="desktop-menu-component-8">
						<img alt="" src={whatsapp} />
						<Link to="#">WhatsApp</Link>
					</div>


					<div className="desktop-menu-component-9">
						<img alt="" src={email} />
						<Link to="#">E-mail</Link>
					</div>


					<div className="desktop-menu-component-10">
						<img alt="" src={timeline} />
						<Link to="/quadroDeHorarios">Quadro de horários</Link>
					</div>


					<div className="desktop-menu-component-11">
						<img alt="" src={documents} />
						<Link to="/solicitacaoDeDocumentos">Solicitação de documentos</Link>
					</div>

					<hr />

					<div className="desktop-menu-component-12">
						<img alt="" src={termOfUse} />
						<Link to="#">Termos de uso</Link>
					</div>

					<div className="desktop-menu-component-13">
						<img alt="" src={privacyPolicy} />
						<Link to="#">Política de privacidade</Link>
					</div>

				</main>

			</div>

		</div>

	);

}
