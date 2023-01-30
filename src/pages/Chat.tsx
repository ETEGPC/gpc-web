import { Menu } from '../components/Menu';
import send from '../images/icons/send_icon.svg'
import '../styles/pages/chat.css';
import { CloseMenu } from '../components/Menu';

export function Chat(){    
  
    document.title = 'Chat';

    return(

        <div className='container'>

            <Menu />

            <div className="chat-container" onClick={CloseMenu}>

                    <h1 className='container-title'>Chat</h1>

                    <h2 className='chat-school-title'>ETE Ginásio</h2>

                    <hr className='chat-hr' />


                <div className="chat-menssages">

                    <div className='chat-content'>

                        <div className='chat-school-menssage'>
                            <p className='chat-school-menssage-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed provident dolores qui deserunt doloribus quae quos ipsam impedit quo.</p>
                        </div>

                        <div className='chat-my-message'>
                            <p className='chat-my-message-content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sed provident dolores qui deserunt doloribus quae quos ipsam impedit quo.</p>
                        </div>

                    </div>

                </div>

                <div className='send-my-message'>

                        <textarea  id="txt" className='chat-textarea' placeholder="Digite algo"></textarea>
                        <button className='chat-button'><img className='chat-button-img' src={send} alt="Ícone de envio da mensagem" /></button>                

                </div>                

            </div>

        </div>

    );
}