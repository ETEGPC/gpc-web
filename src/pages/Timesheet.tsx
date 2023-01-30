import { Menu } from '../components/Exports';
import '../styles/pages/timesheet.css';
import { CloseMenu } from '../components/Menu';

export function Timesheet(){

	document.title = 'Quadro de horários';

	return(

		<div className="container">
			
			<Menu />

			<div className="timeSheet-container" onClick={CloseMenu}>
					
				<h1 className="container-title">Quadro de horários</h1>

				<main className="timeSheet-content">

					<h4>Click no link abaixo  para acessar o quadro de horários de sua turma.</h4>
					<p>Link</p>

				</main>

			</div>

		</div>

	);
}