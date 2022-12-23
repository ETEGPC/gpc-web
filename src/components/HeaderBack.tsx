import '../styles/components/headerBack.css';
import gpIcon from '../images/icons/gp_icon.png'
import greenArrow from '../images/icons/greenArrow_icon.png'


export function HeaderBack(){	

	return(
		
		<div className="headerBack-container">
			
			<button className="buttonBack headerBack-button"> <img className="greenArrow" src={greenArrow} /> </button>
			<img className="gpLogo headerBack-img" src={gpIcon} />


		</div>

	);

}
