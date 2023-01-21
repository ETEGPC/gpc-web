import { useEffect, useState } from 'react';
import { Menu } from '../components/Menu';
import send from '../images/icons/send_icon.svg'
import api from '../services/api';
import { IMessage } from '../@types';
import '../styles/pages/chat.css';
import { CloseMenu } from '../components/Menu';

export function Chat() {
	const [messageInput, setMessageInput] = useState('');
	const [messages, setMessages] = useState<IMessage[]>([]);
	const parentId = localStorage.getItem('parentId');

	api.socket.on(`${parentId}-gestao`, (message: IMessage) => {
		setMessages([...messages, message]);
	});

	document.title = 'ETE GPC | Chat';


	async function handleGetEarlierMessages() {
		await api.http.get('/messages', {
			params: {
				room: `${parentId}-gestao`
			}
		}).then(resp => {
			setMessages(resp.data);
		});
	};
	function handleSendMessage() {
		api.socket.emit(`message`, {
			room: `${parentId}-gestao`,
			author: parentId,
			message: messageInput
		});
		setMessageInput('');
	};

	useEffect(() => {
		handleGetEarlierMessages();
	});
	return (
		<div className='container'>

			<Menu />

			<div className="chat-container" onClick={CloseMenu}>
				<h1 className='container-title'>Chat</h1>
				<h2 className='chat-school-title'>ETE Ginásio</h2>

				<hr className='chat-hr' />

				<div className='chat-content'>
					{
						messages.map(message => {
							return message.author === parentId ?
								<div className='chat-my-message' key={message.id}>
									<p className='chat-my-message-content'>{message.message}</p>
								</div>
								:
								<div className='chat-school-menssage' key={message.id}>
									<p className='chat-school-menssage-content'>{message.message}</p>
								</div>
						})
					}
				</div>

				<div className='send-my-message'>
					<textarea
						id="txt"
						className='chat-textarea'
						placeholder="Digite algo"
						onChange={e => setMessageInput(e.target.value)}
						value={messageInput}
					/>
					<button className='chat-button' onClick={handleSendMessage}>
						<img className='chat-button-img'
							src={send}
							alt="send-button-icon"
						/>
					</button>
				</div>
			</div>
		</div>
	);
}