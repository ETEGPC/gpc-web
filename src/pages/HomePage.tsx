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
import { FaEye, FaMapMarkerAlt, FaCompass } from 'react-icons/fa';

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

					<h2 className="about-gp">Sobre o Ginásio Pernambucano</h2>
					<section className='about'>
						<div className='about-card'>
							<h3>Missão</h3>
							<FaMapMarkerAlt color='#0076E2' size={32} />
							<p className='about-text'>Dialogar com o contexto tecnológico das empresas locais por meio da oferta dos cursos técnicos em Desenvolvimento de Sistemas e Multimídia, na área de tecnologia da informação, com foco na formação de profissionais para atender a demanda crescente desse polo tecnológico.</p>
						</div>

						<div className='about-card'>
							<h3>Visão</h3>
							<FaEye color='#0076E2' size={32} />
							<p className='about-text'>Ser reconhecida como uma escola de excelência na prestação de serviços educacionais, que qualifiquem o estudante, jovem ou adulto, para o exercício da laboralidade, tornando-os aptos para responder aos desafios técnicos, culturais e sociais da contemporaneidade, a partir da profissão planejada por eles em seus projetos de vidas.</p>
						</div>

						<div className='about-card'>
							<h3>Valores</h3>

							<FaCompass color='#0076E2' size={32} />
							<ul className='values'>
								<li><b>Ética:</b> como valor norteador das relações interpessoais.</li>
								<li><b>Solidariedade:</b> Solidariedade: como forma de fortalecer os princípios de igualdade fraternidade.</li>
								<li><b>Respeito:</b> como elemento que deve permear a relação consigo mesmo, com o outro e com o meio ambiente.</li>
								<li><b>Profissionalismo:</b> não apenas como uma prática moral, mas como atitude de compromisso, dedicação e respeito a si e à comunidade.</li>
							</ul>
						</div>
					</section>

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

					<button onClick={() => redirectTopage('/faq')} className="button-chat">
						<img alt='button chat icon' className="button-chat-img" src={chatIcon} />
					</button>

				</main>

			</div>

		</div>
	);
}