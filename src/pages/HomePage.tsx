import { Menu } from '../components/Exports';
import '../styles/pages/homePage.css'
import imageExample from '../images/imageExample.png'
import imageExample2 from '../images/imageExample2.svg'
import imageExample3 from '../images/imageExample3.svg'
import imageExample4 from '../images/imageExample4.svg'
import imageExample5 from '../images/imageExample5.svg'
import greenSchedule from '../images/icons/greenSchedule_icon.svg'
import greenBulletinBoard from '../images/icons/greenBulletinBoard_icon.svg'
import greenLatestNews from '../images/icons/greenLatestNews_icon.svg'
import emailIcon from '../images/icons/email2_icon.svg'
import instagrmaIcon from '../images/icons/instagram2_icon.svg'
import whatsappIcon from '../images/icons/whatsapp2_icon.svg'
import chatIcon from '../images/icons/chat2_icon.svg'
import { Link, useNavigate } from 'react-router-dom';
import { CloseMenu } from '../components/Menu';

export function HomePage() {

	document.title = 'Página inicial';


	//Function to change carousel images
	let currentImage: number = 1;
	setInterval(function () {


		let carouselTitle = document.getElementById('carousel-title') as HTMLParagraphElement;
		let carouselImages = document.getElementById('carousel-content') as HTMLDivElement;
		let circle1 = document.getElementById('circle-1') as HTMLDivElement;
		let circle2 = document.getElementById('circle-2') as HTMLDivElement;
		let circle3 = document.getElementById('circle-3') as HTMLDivElement;
		let circle4 = document.getElementById('circle-4') as HTMLDivElement;
		let circle5 = document.getElementById('circle-5') as HTMLDivElement;

		if (currentImage === 1) {

			carouselImages.style.backgroundImage = 'url("' + imageExample2 + '")';
			circle1.style.backgroundColor = 'transparent';
			circle2.style.backgroundColor = '#fff';
			currentImage = 2;
			carouselTitle.innerText = 'Título 2';

		} else if (currentImage === 2) {

			carouselImages.style.backgroundImage = 'url("' + imageExample3 + '")';
			circle2.style.backgroundColor = 'transparent';
			circle3.style.backgroundColor = '#fff';
			currentImage = 3;
			carouselTitle.innerText = 'Título 3';


		} else if (currentImage === 3) {

			carouselImages.style.backgroundImage = 'url("' + imageExample4 + '")';
			circle3.style.backgroundColor = 'transparent';
			circle4.style.backgroundColor = '#fff';
			currentImage = 4;
			carouselTitle.innerText = 'Título 4';

		} else if (currentImage === 4) {

			carouselImages.style.backgroundImage = 'url("' + imageExample5 + '")';
			circle4.style.backgroundColor = 'transparent';
			circle5.style.backgroundColor = '#fff';
			currentImage = 5;
			carouselTitle.innerText = 'Título 5';

		} else if (currentImage === 5) {

			carouselImages.style.backgroundImage = 'url("' + imageExample + '")';
			circle5.style.backgroundColor = 'transparent';
			circle1.style.backgroundColor = '#fff';
			currentImage = 1;
			carouselTitle.innerText = 'Título 1';
		}

	}, 3000)


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

	return (


		<div className="container">

			<Menu />

			<div className="homePage-container" id="container" onClick={CloseMenu}>

				<h1 className="homepage-title">Página inicial</h1>



				<div className="carousel-content" id="carousel-content">

					<p className="carousel-title" id="carousel-title">Mostra de inovação dos espaços 4.0</p>

					<div className="carousel-circles">

						<div className="circle" id="circle-1"></div>
						<div className="circle" id="circle-2"></div>
						<div className="circle" id="circle-3"></div>
						<div className="circle" id="circle-4"></div>
						<div className="circle" id="circle-5"></div>

					</div>

				</div>

				<div className="links">

					<div className="links-component1" onClick={() => redirectTopage('/nossaAgenda')} >

						<img src={greenSchedule} />
						<Link to="/nossaAgenda">Nossa agenda</Link>

					</div>

					<div className="links-component2" onClick={() => redirectTopage('/muralDeAvisos')}>

						<img src={greenBulletinBoard} />
						<Link to="/muralDeAvisos">Mural de avisos</Link>

					</div>

					<div className="links-component3" onClick={() => redirectTopage('/ultimasNoticias')}>

						<img src={greenLatestNews} />
						<Link to="/ultimasNoticias">Últimas notícias</Link>

					</div>

				</div>

				<main className="main-content">

					<h5 className="about-gp">Sobre o Ginásio Permanbucano</h5>
					<p className="about-gp-content">Lorem ipsum dolor sit amet consectetur. Fermentum quis sem nulla eget eget neque elementum tristique. Pulvinar volutpat quis massa vestibulum malesuada ultrices hac scelerisque a. Vitae ac nunc mauris nec mattis nibh lorem aenean. Aenean in quis tincidunt urna pharetra quam. Iaculis ultrices sagittis amet ultricies dignissim. Lacus massa id lectus molestie aliquet eleifend facilisis. Sit dui gravida pharetra faucibus at arcu in. Eu quis massa elit enim. Gravida senectus tristique ultrices elementum sit et viverra purus metus. Duis pellentesque malesuada pretium amet justo. Mauris fringilla vitae nam id egestas nibh amet fermentum lectus. Neque volutpat mi aenean neque leo auctor vitae cras eget. Imperdiet sit vulputate in id. In volutpat maecenas dolor odio ullamcorper in leo commodo neque...<Link to="/sobreOGinasioPernambucano">Ler completo.</Link></p>
					<h5 className="contact-forms-title">Formas de contato</h5>
					<p className="about-contact-forms"><span className="span-contact-forms">Atenção</span> - O horário de atendimento, por todos os meios de comunicação, é de 8h às 17h. Além disso, é recomendado o cadastro e uso do chat do próprio aplicativo caso você seja responsável de algum estudante de nossa escola.</p>

					<div className="contact-forms">

						<div className="contact-component1" onClick={openEmail}>

							<img src={emailIcon} />
							<Link to="#">E-mail</Link>

						</div>

						<div className="contact-component2" onClick={openInstagram}>

							<img src={instagrmaIcon} />
							<Link to="#">Instagram</Link>

						</div>

						<div className="contact-component3" onClick={openWhatsApp}>

							<img src={whatsappIcon} />
							<Link to="#">WhatsApp</Link>

						</div>

					</div>

					<button onClick={() => redirectTopage('/chat')} className="button-chat"><img className="button-chat-img" src={chatIcon} /></button>

				</main>

			</div>

		</div>

	);
}