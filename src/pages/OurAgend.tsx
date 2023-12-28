import { Menu } from '../components/Exports';
import '../styles/pages/ourAgend.css';
import Calendar2 from '../components/Calendar';
import api from '../services/api';
import { IEvent } from '../@types';
import { useState } from 'react';

export function OurAgend() {
	const [events, setEvents] = useState<IEvent[]>([]);

	async function handleGetEvents(month: string, year: string) {
		await api.http.get('/events', {
			params: {
				month,
				year
			}
		}).then(resp => {
			setEvents(resp.data);
		}).catch(err => {
			console.error(err);
			alert('Houve um erro ao buscar os eventos.')
		})
	};

	document.title = 'ETE GPC | Nossa agenda';

	return (

		<div className="container">

			<Menu />

			<div className="ourAgend-container">

				{/* <h1 className="container-title">Nossa agenda</h1> */}

				<Calendar2
					events={events}
					onChangeMonth={(month, year) => {
						handleGetEvents(String(month + 1), year);
					}}
				/>

				<div className="container-events">
					{
						events.length === 0 ?
							<p>Ops... Parece que ainda não há nenhum evento. Tente novamente mais tarde.</p>
							:
							events.map(event => {
								return (
									<div className="new-event" key={event.id}>
										<h3 className="new-event-date" >{String(new Date(event.date).getDay())}</h3>
										<h4 className="new-event-title">{event.title}</h4>
										<p className="new-event-description">{event.description}</p>
									</div>
								);
							})
					}
				</div>
			</div>
		</div>
	);
}