import { Menu } from '../components/Exports';
import '../styles/pages/timesheet.css';

export function Timesheet(){

	document.title = 'Quadro de horários';

	return(

		<div className="container">
			
			<Menu />

			<div className="timeSheet-container">
					
				<h1 className="container-title">Quadro de horários</h1>

				<main className="timeSheet-content">

					<h3>Click no link abaixo  para acessar o quadro de horários de sua turma.</h3>
					<p>Link</p>

				</main>

			</div>

		</div>

	);
}