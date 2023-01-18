import { Menu } from '../components/Exports';
import '../styles/pages/timesheet.css';

export function Timesheet(){

	document.title = 'Quadro de horários';

	return(

		<div>
			
			<Menu />

			<main className="timeSheet-content">
				
				<h1>Quadro de horários</h1>
				<h3>Click no link abaixo  para acessar o quadro de horários de sua turma.</h3>
				<p>Link</p>

			</main>

		</div>

	);
}