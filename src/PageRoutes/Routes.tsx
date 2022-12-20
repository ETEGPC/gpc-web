import { BrowserRouter, Route, Routes as Rts} from 'react-router-dom';
import { LoginScreen, LatestNews } from '../components/Exports';

export function Routes(){
	return(

		<BrowserRouter>
			<Rts>
				<Route path="" element={<LoginScreen />} />
				<Route path="/ultimasNoticias" element={<LatestNews />} />
			</Rts>
		</BrowserRouter>

	);
}