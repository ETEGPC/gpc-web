import { Link } from 'react-router-dom'
import gpIcon from '../images/icons/gp_icon.png'
import menuIcon from '../images/icons/menu_icon.png'
import '../styles/components/Menu.css';
import greenArrow from '../images/icons/greenArrow_icon.png'
import user from '../images/icons/user_icon.png'
import latestNews from '../images/icons/latestNews_icon.png'
import bulletinBoard from '../images/icons/bulletinBoard_icon.png'
import schedule from '../images/icons/schedule_icon.png'
import chat from '../images/icons/chat_icon.png'
import facebook from '../images/icons/facebook_icon.png'
import instagram from '../images/icons/instagram_icon.png'
import whatsapp from '../images/icons/whatsapp_icon.png'
import email from '../images/icons/email_icon.png'
import timeline from '../images/icons/timeline_icon.png'
import documents from '../images/icons/documents_icon.png'
import termOfUse from '../images/icons/termsOfUse_icon.png'
import privacyPolicy from '../images/icons/privacyPolicy_icon.png'
import initialPage from '../images/icons/initialPage_icon.svg'



export function Menu(){

	function OpenMenu(){

		let menu:any = document.getElementById('menu');
		menu.style.transform = 'translateX(0%)';

	}

	function CloseMenu(){

		let menu:any = document.getElementById('menu');
		menu.style.transform = 'translateX(-100%)';

	}



	return(

		<div className="menu-container">


			<div className="menu-open" id="menu">

			
				<header className="menu-header">
					<button onClick={CloseMenu} className="menu-header-button"><img className="menu-header-img" src={greenArrow} /></button>
					<h1 className="menu-header-h1">Menu</h1>						
					
				</header>		

				<main className="menu-main">

					<div className="menu-component-0">
						<img src={initialPage} />
						<Link to="#">Página inicial</Link>
					</div>
					 
					<div className="menu-component-1">
						<img src={user} />
						<Link to="/meuPerfil">Meu perfi</Link>
					</div>


					<div className="menu-component-2">
						<img src={latestNews} />
						<Link to="/ultimasNoticias">Últimas notícias</Link>
					</div>


					<div className="menu-component-3"> 
						<img src={bulletinBoard} />
						<Link to="#">Mural de avisos</Link>
					</div>


					<div className="menu-component-4">
						<img src={schedule} />
						<Link to="/nossaAgenda">Nossa agenda</Link>
					</div>


					<div className="menu-component-5">
						<img src={chat} />
						<Link to="/chat">Chat</Link>
					</div>


					<div className="menu-component-6">
						<img src={facebook} />
						<Link to="#">Facebook</Link>
					</div>


					<div className="menu-component-7">
						<img src={instagram} />
						<Link to="#">Instagram</Link>
					</div>


					<div className="menu-component-8">
						<img src={whatsapp} />
						<Link to="#">WhatsApp</Link>
					</div>


					<div className="menu-component-9">
						<img src={email} />
						<Link to="#">E-mail</Link>
					</div>


					<div className="menu-component-10">
						<img src={timeline} />
						<Link to="#">Quadro de horários</Link>
					</div>


					<div className="menu-component-11">
						<img src={documents} />
						<Link to="#">Solicitação de documentos</Link>
					</div>

					<hr />

					<div className="menu-component-12">
						<img src={termOfUse} />
						<Link to="#">Termos de uso</Link>						
					</div>

					<div className="menu-component-13">
						<img src={privacyPolicy} />
						<Link to="#">Política de privacidade</Link>						
					</div>

				</main>	

			</div>
			

			<div className="menu-closed">
				<button onClick={OpenMenu} className="menu-button"><img className="menu-img-menu" src={menuIcon} /></button>
				<img className="menu-img-gp" src={gpIcon} />
			</div>


		</div>

	);

}