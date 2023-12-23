import { Menu } from '../components/Exports';
import '../styles/pages/homePage.css';
import htmlTagIcon from '../images/icons/htmlTag_icon.svg';
import cameraIcon from '../images/icons/camera_icon.svg';
import { Link, useNavigate } from 'react-router-dom';
import { CloseMenu } from '../components/Menu';
import { Carousel } from '../components/Carousel';
import { useEffect } from 'react';
import { FaEye, FaMapMarkerAlt, FaCompass } from 'react-icons/fa';

//Import HomePage's icons
import {
 AiOutlineSchedule,
 AiOutlineBell,
 AiOutlineAlert,
 AiFillInstagram
} from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import { RiMessage3Fill } from 'react-icons/ri';

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

				{/* <Carousel /> */}

				<div className="links">

					<div className="links-component1" onClick={() => redirectTopage('/nossaAgenda')} >

						<AiOutlineSchedule className="homepage-icons" />
						<Link to="/nossaAgenda">Nossa agenda</Link>

					</div>

					<div className="links-component2" onClick={() => redirectTopage('/muralDeAvisos')}>

						<AiOutlineBell className="homepage-icons" />
						<Link to="/muralDeAvisos">Mural de avisos</Link>

					</div>

					<div className="links-component3" onClick={() => redirectTopage('/ultimasNoticias')}>

						<AiOutlineAlert className="homepage-icons" /> 
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

					<h2 className="about-courses-title">Cursos técnicos</h2>

					<section className="about-couses">
						<div className="courses">
							<header>
								<img src={htmlTagIcon} alt="Ícone de tag HTML"/>
								<h3>Técnico em Desenvolvimento de Sistemas</h3>
							</header>
							<p>O profissional Técnico em Desenvolvimento de Sistemas é capaz de entender e criar os sistemas por trás das grandes aplicações que regem o mundo digital hoje em dia, como exemplo sites WEB, programas mobile/desktop, bancos de dados, entre outros. Isso tudo com algumas das tecnologias mais usadas atualmente, entre elas HTML, CSS, JavaScrpit, Java, PHP, MySQL, de forma que o discente seja capaz de resolver problemas técnicos com qualidade e velocidade.</p>
						</div>
						<div className="courses">
							<header>
								<img src={cameraIcon} alt="Ícone de câmera" />
								<h3>Técnico em Multimídia</h3>
							</header>
							<p>O curso técnico em multimídia tem como objetivo preparar o aluno para trabalhar na produção de conteúdo digital, utilizando diversas ferramentas de design, produção de vídeo, áudio e animação. Durante o curso, os alunos aprendem a utilizar softwares como Photoshop, Illustrator, Premiere, After Effects, entre outros, para produzir materiais gráficos e audiovisuais de alta qualidade. Além disso, são ensinados conceitos de marketing digital, design de interfaces e experiência do usuário, para que o aluno possa desenvolver projetos que atendam às necessidades do mercado. </p>
						</div>
                        <p className="moreInformationsParagraph">Para mais informações, vá para a página de Faq <Link to="/faq">clicando aqui.</Link></p>
					</section>

					<h2 className="contact-forms-title">Formas de contato</h2>
					<p className="about-contact-forms"><span className="span-contact-forms">Atenção</span> - O horário de atendimento, por todos os meios de comunicação, é das 8h às 17h. Além disso, é recomendado o cadastro e uso do chat do próprio aplicativo caso você seja responsável de algum estudante de nossa escola.</p>

					<div className="contact-forms">
						<div className="contact-component1" onClick={openEmail}>

							<MdEmail className="components-icon" />
							<Link to="#">E-mail</Link>
						</div>

						<div className="contact-component2" onClick={openInstagram}>

							<AiFillInstagram className="components-icon" />
							<Link to="#">Instagram</Link>
						</div>

						<div className="contact-component3" onClick={openWhatsApp}>

							<IoLogoWhatsapp className="components-icon" />
							<Link to="#">WhatsApp</Link>
						</div>

					</div>

					<button onClick={() => redirectTopage('/faq')} className="button-chat">
						<RiMessage3Fill className="button-chat-img"/>
					</button>

				</main>

			</div>

		</div>
	);
}
