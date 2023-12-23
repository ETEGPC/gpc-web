import { useNavigate, NavigateFunction } from 'react-router-dom'
import '../styles/components/Menu.css';
import eteLogo from '../images/eteLogo.svg';
import { useState, useEffect } from 'react';

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
 import { IMenuItems, IMenuItemProps } from '../@types';

export function CloseMenu() {
	let menu: any = document.getElementById('menu');
	menu.style.transform = 'translateX(-100%)';
}

const MenuItem = ({ items }: IMenuItemProps) => {	
	return (
		<>
			{items.map((item, index) => (			
				<div key={index} className={`menu-component-${index}`} onClick={item.handleOnclick}>
					{item.icon}
					<p>{item.linkText}</p>					
				</div>
			))}
		</>
	)
}

export function Menu() {

	const [isDesktopWindow, setIsDesktopWindow] = useState<boolean>();

	useEffect(() => {
		const toggleIsInstallPwaVisible = (): void => {
			if(window.innerHeight === 497 && window.innerWidth === 800){
				setIsDesktopWindow(false);
			}else {
				setIsDesktopWindow(true);
			}
		};

		toggleIsInstallPwaVisible();
		window.addEventListener('resize', toggleIsInstallPwaVisible);

		return () => window.removeEventListener('resize', toggleIsInstallPwaVisible);

	}, []);

	const navigate: NavigateFunction = useNavigate();

	function openWhatsApp() {
		window.open('https://wa.me/5581997841403', '_blank');
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

	const menuItems: IMenuItems[] =  [
		{ icon: <AiOutlineHome className="icons"/>,
		  linkText: "Página inicial", handleOnclick: () =>  navigate('/')
		},
		{ icon: <AiOutlineUser className="icons"/>,
		  linkText: "Meu perfil", handleOnclick: () => navigate('/meuPerfil')
		},
		{ icon: <AiOutlineAlert className="icons"/>,
		  linkText: "Últimas notícias", handleOnclick: () => navigate('/ultimasNoticias')
		},
		{ icon: <AiOutlineBell className="icons"/>,
		  linkText: "Mural de avisos", handleOnclick: () => navigate('/muralDeAvisos')
		},
		{ icon: <AiOutlineSchedule className="icons"/>,
		  linkText: "Nossa agenda", handleOnclick: () => navigate('/nossaAgenda')
		},
		{ icon: <BsChatDots className="icons chat-icon"/>,
		  linkText: "Chat", handleOnclick: () => navigate('/faq')
		},
		{ icon: <AiOutlineWhatsApp className="icons chat-icon"/>,
		  linkText: "WhatsApp", handleOnclick: openWhatsApp
		},
		{ icon: <AiOutlineMail className="icons chat-icon"/>,
		  linkText: "E-mail", handleOnclick: openEmail
		},
		{ icon: <AiOutlineInstagram className="icons chat-icon"/>,
		  linkText: "Instagram", handleOnclick: openInstagram
		},
		{ icon: <AiOutlineCalendar className="icons chat-icon"/>,
		  linkText: "Quadro de horários", handleOnclick: () => navigate('/quadroDeHorarios')
		},
		{ icon: <AiOutlineFolderOpen className="icons chat-icon"/>,
		  linkText: "Solicitação de documentos", handleOnclick: () => navigate('/solicitacaoDeDocumentos')
		},
		{ icon: <AiOutlineFileText className="icons chat-icon"/>,
		  linkText: "Termos de uso", handleOnclick: () => navigate('/')
		},
		{ icon: <AiOutlineLock className="icons chat-icon"/>,
		  linkText: "Política de privacidade", handleOnclick: () => navigate('/')
		},
	];

	let deferredPrompt: any;
	const [canInstall, setCanInstall] = useState(false)

	function OpenMenu() {
		let menu: any = document.getElementById('menu');
		menu.style.transform = 'translateX(0%)';
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
			<header className="menu-header">
				<button onClick={OpenMenu} className="menu-button"><FiMenu className="menu-img-menu"/></button>
				<img className="menu-img-gp" src={eteLogo} alt="Ícone da ETE" />
				<h2 className="menu-school-title">ETE Ginásio Pernambucano</h2>
			</header>
			<div className="menu-open" id="menu">
				<main className="menu-main">
					{isDesktopWindow && (
						<header className="menu-main-header">
							<BiArrowBack onClick={CloseMenu} />	
							<h1 className="menu-h1">Menu</h1>
						</header>
					)}
					{!navigator.userAgent.includes('iPhone') && canInstall ?
						<></>
						:		
						<div onClick={installPwa} className="install-app-container">
							<AiOutlineDownload className="icons"/>
							<button className="install-app-button">
								<p className='install-app-label'>Instalar aplicativo</p>
							</button>
						</div>
					}					
					<MenuItem items={menuItems}/>
				</main>
			</div>			
		</div>
	);
}
