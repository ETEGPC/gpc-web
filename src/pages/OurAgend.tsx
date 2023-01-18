import { CalendarComponent, Menu } from '../components/Exports';
import blueArrowIcon from '../images/icons/blueArrow_icon.svg'
import '../styles/pages/ourAgend.css';
import { CloseMenu } from '../components/Menu';

export function OurAgend(){

	document.title = 'Nossa agenda';

	return(

		<div className="container">
			
			<Menu />

			<div className="ourAgend-container" onClick={CloseMenu}>

				<h1 className="container-title">Nossa agenda</h1>
				
				<CalendarComponent />

				<div className="container-events">

					<div className="new-event">					

						<h3 className="new-event-date" >19</h3>
						<h4 className="new-event-title">Evento - núcleo de gênero</h4>
						<p className="new-event-description">Lorem ipsum dolor sit amet consectetur. Fermentum quis sem nulla eget eget neque elementum tristique...</p>
						<img className="new-event-arrow-img" src={blueArrowIcon} />

					</div>	

				</div>

			</div>

		</div>
	);
}