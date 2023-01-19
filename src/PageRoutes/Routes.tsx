import { BrowserRouter, Route, Routes as Rts } from 'react-router-dom';
import { LoginScreen, LatestNews, NewsOpen, Chat, OurAgend, HomePage, MyProfile, DocumentsRequest, BulletinBoard, Timesheet } from '../components/Exports';

export function Routes() {
	return (
		<BrowserRouter>
			<Rts >
				<Route path="" element={<LoginScreen />} />
				<Route path="/ultimasnoticias" element={<LatestNews />} />
				<Route path="/noticiaaberta" element={<NewsOpen />} />
				<Route path="/chat" element={<Chat />}></Route>
				<Route path="/nossaagenda" element={<OurAgend />}></Route>
				<Route path="/paginainicial" element={<HomePage />}></Route>
				<Route path="/meuperfil" element={<MyProfile />} />
				<Route path="/solicitacaodedocumentos" element={<DocumentsRequest />} />
				<Route path="/muraldeavisos" element={<BulletinBoard />} />
				<Route path="/quadrodehorarios" element={<Timesheet />} />
			</Rts>
		</BrowserRouter>

	);
}