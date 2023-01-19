import { useEffect, useState } from 'react';
import { Menu } from '../components/Menu';
//import eteLogo from '../images/eteLogo.svg';
import send from '../images/icons/send_icon.svg'
import api from '../services/api';
import { IMessage } from '../@types';
import '../styles/pages/chat.css';

export function Chat() {
	const [messageInput, setMessageInput] = useState('');
	const [messages, setMessages] = useState<IMessage[]>([]);
	const parentId = localStorage.getItem('parentId');

	api.socket.on(`${parentId}-gestao`, (message: IMessage) => {
		setMessages([...messages, message]);
	});

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

		<div className='chat-container'>

			<Menu />

			<h1 className='chat-container-h1'>Chat</h1>

			<div className='chat-subContiner'>

				<header className='chat-header'>
					<h2 className='chat-header-h2'>ETE Ginásio</h2>
				</header>

				<hr className='chat-hr' />

				{
					messages.map(message => {
						return message.author === parentId ?
							<div className='chat-message2' key={message.id}>
								<p className='chat-message2-p'>{message.message}</p>
							</div>
							:
							<div className='chat-message1' key={message.id}>
								<p className='chat-message1-p'>{message.message}</p>
							</div>
					})
				}

				<div className='sendMessage'>
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