import { BrowserRouter, Route, Routes as Rts} from 'react-router-dom';
import { CreateAccount ,LoginScreen } from '../componentsExport/Exports';

export function Routes(){
	return(

		<BrowserRouter>
			<Rts>
				<Route path="" element={<LoginScreen />} />
				<Route path="/criarConta" element={<CreateAccount />} />
			</Rts>
		</BrowserRouter>

	);
}