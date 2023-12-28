import { useNavigate, NavigateFunction } from 'react-router-dom'
import eteLogo from '../../images/eteLogo.svg';
import { useState, useRef } from 'react';
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
import { IMenuItems, IMenuItemProps } from '../../@types';
import * as S from './styles';
import { useIsDesktopWindow } from '../../CustomHooks/useIsDesktopWindow';

const MenuItem = ({ items }: IMenuItemProps) => {	
	return (
		<>
			{items.map((item, index) => (			
				<S.MenuItemContainer key={index} onClick={item.handleOnclick}>
					{item.icon}
					<p>{item.linkText}</p>					
				</S.MenuItemContainer>
			))}
		</>
	)
}


export function Menu() {
	let isDesktopWindow: boolean = useIsDesktopWindow();;
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);
	const navigate: NavigateFunction = useNavigate();
	const menuRef = useRef<HTMLDivElement>(null);


	function openWhatsApp() {
		window.open('https://wa.me/5581997841403', '_blank');
	}

	function closeMenu(desktopWindow: boolean): boolean | undefined {		
		if(desktopWindow){
			return false;
		}

		if(menuRef.current && isMenuVisible){
			menuRef.current.style.transform = "translateX(-100%)";
			setIsMenuVisible(false);
		}
	}

	const openMenu = (): void => {
		if(menuRef.current && !isMenuVisible){
			menuRef.current.style.transform = "translateX(0%)";
			setIsMenuVisible(true);
		}
	}

	function openInstagram() {
		window.open('https://www.instagram.com/eteginasiopernambucano/', '_blank');
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

	window.addEventListener('beforeinstallprompt', (e) => {
		e.preventDefault();
		deferredPrompt = e;
		setCanInstall(true)
	});

	function installPwa() {
		deferredPrompt.prompt();
	}

	return (
		<S.MenuContainer onClick={() => closeMenu(isDesktopWindow)}>
			<S.MenuHeader> 
				<FiMenu onClick={openMenu} /> 
				<S.MenuHeaderSchoolIcon 
					src={eteLogo}
					alt="Ícone da ETE"
					onClick={() => navigate('/')}
				/> 
				<h2 onClick={() => navigate('/')}>ETE Ginásio Pernambucano</h2> 
			</S.MenuHeader>
			<S.MenuContent ref={menuRef}> 
				<main> 
					{isDesktopWindow === false && (
						<header> 
							<BiArrowBack onClick={() => closeMenu(isDesktopWindow)} />	
							<h1>Menu</h1> 
						</header>
					)}
					{!navigator.userAgent.includes('iPhone') && canInstall ?
						<></>
						:		
						<S.MenuInstallAppContainer onClick={installPwa}> 
							<AiOutlineDownload />
							<button>Instalar aplicativo</button>
						</S.MenuInstallAppContainer>
					}					
					<MenuItem items={menuItems}/>
				</main>
			</S.MenuContent>			
		</S.MenuContainer>
	);
}
