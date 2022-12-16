import '../css/components/headerBack.css';
import gpIcon from '../images/icons/gp_icon.png'
import greenArrow from '../images/icons/greenArrow_icon.png'

export function HeaderBack(){


	return(

		<div className="container">
			
			<button className="buttonBack"> <img className="greenArrow" src={greenArrow} /> </button>
			<img className="gpLogo" src={gpIcon} />


		</div>

	);

}