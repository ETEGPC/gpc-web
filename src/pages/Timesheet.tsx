import { Menu } from '../components/Exports';
import api from '../services/api';
import '../styles/pages/timesheet.css';
// import { CloseMenu } from '../components/Menu';

export function Timesheet () {
	const schoolClasses: string[] = JSON.parse(String(localStorage.getItem('schoolClasses')));

	async function handleOpenSchedule(schoolClass: string) {
		await api.http.get(`/schedule/${schoolClass}`).then(resp => {
			window.open(resp.data.url);
		});
	}

	return(
		<div>
			<Menu />
			<main className="timeSheet-content">
				<h1>Quadro de horários</h1>
				<h3>Click no link abaixo  para acessar o quadro de horários de sua turma.</h3>
				{
					schoolClasses.map(schoolClass => {
						return <p onClick={() => handleOpenSchedule(schoolClass)}>Horário da turma: {schoolClass}</p>
					})
				}
			</main>
		</div>
	);
}