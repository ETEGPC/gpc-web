import { Menu } from '../components/Menu';
import eteLogo from '../images/eteLogo.svg';
import send from '../images/icons/send_icon.svg'
import '../styles/pages/chat.css';

export function Chat(){    

  
    return(

        <div className='chat-container'>

            <Menu />

            <h1 className='chat-container-h1'>Chat</h1>

            <div className='chat-subContiner'>

                <header className='chat-header'>

                    <h2 className='chat-header-h2'>ETE Ginásio</h2>

                </header>

                <hr className='chat-hr' />

                <div className='chat-message1'>

                    <p className='chat-message1-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed provident dolores qui deserunt doloribus quae quos ipsam impedit quo.</p>

                </div>

                <div className='chat-message2'>

                    <p className='chat-message2-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed provident dolores qui deserunt doloribus quae quos ipsam impedit quo.</p>

                </div>

                <div className='sendMessage'>

                        <textarea  id="txt" className='chat-textarea' placeholder="Digite algo"></textarea>
                        <button className='chat-button'><img className='chat-button-img' src={send} /></button>
                        

                </div>

                

            </div>

        </div>

    );
}