import { BrowserRouter, Route, Routes as Rts} from 'react-router-dom';
import { LoginScreen, LatestNews, NewsOpen, Chat } from '../components/Exports';

export function Routes(){
	return(

		<BrowserRouter>
			<Rts>
				<Route path="" element={<LoginScreen />} />
				<Route path="/ultimasNoticias" element={<LatestNews />} />
				<Route path="/noticiaAberta" element={<NewsOpen />} />
				<Route path="/chat" element={<Chat/>}></Route>
			</Rts>
		</BrowserRouter>

	);
}