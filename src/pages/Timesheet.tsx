import { Menu } from '../components/Exports';
import api from '../services/api';
import '../styles/pages/timesheet.css';

export function Timesheet() {
	const schoolClasses: string[] = JSON.parse(String(localStorage.getItem('schoolClasses')));

	async function handleOpenSchedule(schoolClass: string) {
		await api.http.get(`/schedule/${schoolClass}`).then(resp => {
			window.open(resp.data.url);
		});
	}

	return (
		<div className="container">
			<Menu />

			<div className="timeSheet-container">

				{/* <h1 className="container-title">Quadro de horários</h1> */}

				{
					schoolClasses.map(schoolClass => {
						return (
							<main className="timeSheet-content">

								<h4>Click no link abaixo  para acessar o quadro de horários da turma {schoolClass}.</h4>
								<p onClick={() => handleOpenSchedule(schoolClass)}>Link</p>

							</main>

							)
					})
				}

			</div>

		</div>
	);
}
