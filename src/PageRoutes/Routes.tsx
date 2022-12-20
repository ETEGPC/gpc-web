import { BrowserRouter, Route, Routes as Rts} from 'react-router-dom';
import { CreateAccount, LoginScreen, Menu, LatestNews} from '../components/Exports';

export function Routes(){
	return(

		<BrowserRouter>
			<Rts>
				<Route path="" element={<LoginScreen />} />
				<Route path="/criarConta" element={<CreateAccount />} />
				<Route path="/ultimasNoticias" element={<LatestNews />} />
			</Rts>
		</BrowserRouter>

	);
}