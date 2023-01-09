import { CalendarComponent, Menu } from '../components/Exports';
import blueArrowIcon from '../images/icons/blueArrow_icon.svg'
import '../styles/pages/ourAgend.css';

export function OurAgend(){
	return(

		<div>
			
			<Menu />

			<h1 className="events-h1">Nossa agenda</h1>
			
			<CalendarComponent />

			<div className="events">



				<div className="event">					

					<h3 className="event-date" >19</h3>
					<h4 className="event-title">Evento - núcleo de gênero</h4>
					<p className="event-description">Lorem ipsum dolor sit amet consectetur. Fermentum quis sem nulla eget eget neque elementum tristique...</p>
					<img className="event-arrow-img" src={blueArrowIcon} />


				</div>

				




			</div>

		</div>
	);
}