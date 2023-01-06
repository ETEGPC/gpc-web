import { Menu } from '../components/Exports';
import '../styles/pages/bulletinBoard.css';

export function BulletinBoard(){
	return(

		<div>
			
			<Menu />

			<h1 className="page-title">Mural de avisos</h1>

			<main className="BulletinBoard-content">
				
				<h4>Turma: 1° ano A - DS</h4>

				<div className="content">
					
					<h4>Atenção - recesso escolar</h4>
					<p>Do dia 30/06 ao dia 15/07 de 2023 a nossa escola entrará em recesso, ou seja, não haverá aulas nem nenhuma atividade extra curricular nesse período.</p>

				</div>


			</main>

		</div>

	);
}