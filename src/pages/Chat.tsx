import { useEffect, useRef, useState } from 'react';
import { Menu } from '../components/Menu';
import { IoSend } from 'react-icons/io5';
import api from '../services/api';
import { IMessage } from '../@types';
import '../styles/pages/chat.css';
import { CloseMenu } from '../components/Menu';

export function Chat() {
	const [messageInput, setMessageInput] = useState('');
	const [messages, setMessages] = useState<IMessage[]>([]);
	const parentId = localStorage.getItem('parentId');
	const messagesDiv = useRef<HTMLDivElement>(null);
	const input = useRef<HTMLTextAreaElement>(null);
	const sendButton = useRef<HTMLButtonElement>(null);

	input.current?.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (messageInput !== '') {
				sendButton.current?.click();
			}
		}
	})

	api.socket.on(`${parentId}-gestao`, (message: IMessage) => {
		setMessages([...messages, message]);
		messagesDiv.current?.scrollIntoView({ behavior: 'smooth' });
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

				<div className="chat-menssages">
					<div className='chat-content' >
						{
							messages.map(message => {
								return message.author === parentId ?
									<div className='chat-my-message' id={message.id} key={message.id}>
										<p className='chat-my-message-content'>{message.message}</p>
									</div>
									:
									<div className='chat-school-menssage' id={message.id} key={message.id}>
										<p className='chat-school-menssage-content'>{message.message}</p>
									</div>
							})
						}

						<div ref={messagesDiv} />
					</div>
				</div>


				<div className='send-my-message'>
					<textarea
						id="txt"
						className='chat-textarea'
						placeholder="Digite algo"
						onChange={e => setMessageInput(e.target.value)}
						value={messageInput}
						ref={input}
					/>
					<button ref={sendButton} className='chat-button' disabled={messageInput === '' ? true : false} onClick={handleSendMessage}>
						<IoSend color={messageInput === '' ? '#616161' : '#048F36'} size={28} />
					</button>
				</div>
			</div >
		</div >
	);
}