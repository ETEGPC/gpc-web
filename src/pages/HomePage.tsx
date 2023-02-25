import { Menu } from '../components/Exports';
import '../styles/pages/homePage.css'
import greenSchedule from '../images/icons/greenSchedule_icon.svg'
import greenBulletinBoard from '../images/icons/greenBulletinBoard_icon.svg'
import greenLatestNews from '../images/icons/greenLatestNews_icon.svg'
import emailIcon from '../images/icons/email2_icon.svg'
import instagrmaIcon from '../images/icons/instagram2_icon.svg'
import whatsappIcon from '../images/icons/whatsapp2_icon.svg'
import chatIcon from '../images/icons/chat2_icon.svg'
import { Link, useNavigate } from 'react-router-dom';
import { CloseMenu } from '../components/Menu';
import { Carousel } from '../components/Carousel';
import { useEffect } from 'react';

export function HomePage() {
	document.title = 'ETE Ginásio Pernambucano';

	// Function to redirect to other pages
	let navigater = useNavigate()
	const redirectTopage = (pageName: string) => {
		navigater(pageName);
	}

	//Function to redirec to the means of contact
	function openInstagram() {
		window.open('https://www.instagram.com/eteginasiopec/', '_blank');
	}

	function openEmail() {
		window.open('mailto:eteginasiopernambucano@gmail.com', '_blank');

	}

	function openWhatsApp() {
		window.open('https://wa.me/5581997841403', '_blank');
	}

	function requestNotificationPermission() {
		if (Notification.permission !== 'granted') {
			Notification.requestPermission();
		};
	};

	useEffect(() => {
		if (!navigator.userAgent.includes('iPhone')) {
			requestNotificationPermission();
		}
	})

	return (


		<div className="container">

			<Menu />

			<div className="homePage-container" id="container" onClick={CloseMenu}>

				<h1 className="homepage-title">Página inicial</h1>

				<Carousel />
				<div className="links">

					<div className="links-component1" onClick={() => redirectTopage('/nossaAgenda')} >

						<img src={greenSchedule} alt="Ícone da nossa agenda" />
						<Link to="/nossaAgenda">Nossa agenda</Link>

					</div>

					<div className="links-component2" onClick={() => redirectTopage('/muralDeAvisos')}>

						<img src={greenBulletinBoard} alt="Ícone do mural de avisos" />
						<Link to="/muralDeAvisos">Mural de avisos</Link>

					</div>

					<div className="links-component3" onClick={() => redirectTopage('/ultimasNoticias')}>

						<img src={greenLatestNews} alt="Ícone das últimas notícias" />
						<Link to="/ultimasNoticias">Últimas notícias</Link>

					</div>

				</div>

				<main className="main-content">

					<h2 className="about-gp">Sobre o Ginásio Pernanbucano</h2>
					<p className="about-gp-content">A Escola Técnica Estadual Ginásio Pernambucano, localizada na AV. Cruz Cabugá, n° 269, bairro de Santo amaro, CEP- 50040-000, no Município do Recife, foi assim redenominada pelo
					Decreto n°49913, de 10/12/2020, diário oficial de 11/12/2020. Tem Cadastro Escolar E- 000.001,
					está inscrita no Cadastro Nacional de Pessoas Jurídicas sob nº10.572.071/0764-45, é mantida pelo
					Governo do Estado de Pernambuco, por meio da Secretaria de Educação (SEE) e oferta uma Educação
					Profissional Técnica de Nível Médio-Integrado (diurno) e subsequente (noturno), nos cursos de
					Desenvolvimento de Sistemas e de Multimídia, ambos do Eixo Tecnológico e Ensino Médio regular
					(diurno). <Link to="/sobreOGinasioPernambucano">Ler completo.</Link></p>
					<h2 className="contact-forms-title">Formas de contato</h2>
					<p className="about-contact-forms"><span className="span-contact-forms">Atenção</span> - O horário de atendimento, por todos os meios de comunicação, é das 8h às 17h. Além disso, é recomendado o cadastro e uso do chat do próprio aplicativo caso você seja responsável de algum estudante de nossa escola.</p>

					<div className="contact-forms">
						<div className="contact-component1" onClick={openEmail}>

							<img src={emailIcon} alt="Ícone do e-mail" />
							<Link to="#">E-mail</Link>
						</div>

						<div className="contact-component2" onClick={openInstagram}>

							<img src={instagrmaIcon} alt="Ícone do Instagram" />
							<Link to="#">Instagram</Link>
						</div>

						<div className="contact-component3" onClick={openWhatsApp}>

							<img src={whatsappIcon} alt="Ícone do WhatsApp" />
							<Link to="#">WhatsApp</Link>
						</div>

					</div>

					<button onClick={() => redirectTopage('/chat')} className="button-chat">
						<img alt='button chat icon' className="button-chat-img" src={chatIcon} />
					</button>

				</main>

			</div>

		</div>
	);
}