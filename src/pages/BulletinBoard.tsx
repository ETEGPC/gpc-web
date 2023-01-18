import { Menu } from '../components/Exports';
import '../styles/pages/bulletinBoard.css';
import { CloseMenu } from '../components/Menu';

export function BulletinBoard(){

	document.title = 'Mural de avisos';

	return(

		<div className="container">
			
			<Menu />

			<div className="bulletinBoard-container" onClick={CloseMenu}>

				<h1 className="container-title">Mural de avisos</h1>

				<h4 className="container-class">Turma: 1° ano A - DS</h4>

				<main className="container-content" >					

					<div className="new-warning">
						
						<h4>Atenção - recesso escolar</h4>
						<p>Do dia 30/06 ao dia 15/07 de 2023 a nossa escola entrará em recesso, ou seja, não haverá aulas nem nenhuma atividade extra curricular nesse período.</p>

					</div>

				</main>				

			</div>

		</div>

	);
}