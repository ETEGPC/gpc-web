//import { useState } from 'preact/hooks';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Route, Routes as Rts, Navigate } from 'react-router-dom';
import {
	LoginScreen,
	LatestNews,
	Chat,
	OurAgend,
	HomePage,
	MyProfile,
	DocumentsRequest,
	BulletinBoard,
	Timesheet,
	ChangePassword,
	AboutGP
} from '../components/Exports';

export function Routes() {
	const [cookie, setCookie] = useCookies(['token']);
	
	return (
		<BrowserRouter>
			<Rts>
				<Route path="" element={<LoginScreen />} />
				<Route path='*' element={<HomePage />} />
				<Route path="/ultimasNoticias" element={ cookie.token ? <LatestNews /> : <Navigate to={'/'} />} />
				<Route path="/chat" element={ cookie.token ? <Chat /> : <Navigate to={'/'} />}></Route>
				<Route path="/nossaAgenda" element={cookie.token ? <OurAgend /> : <Navigate to={'/'} />}></Route>
				<Route path="/paginaInicial" element={<HomePage />}></Route>
				<Route path="/meuPerfil" element={cookie.token ? <MyProfile /> : <Navigate to={'/'} />} />
				<Route path="/solicitacaoDeDocumentos" element={cookie.token ? <DocumentsRequest /> : <Navigate to={'/'} />} />
				<Route path="/muralDeAvisos" element={cookie.token ? <BulletinBoard /> : <Navigate to={'/'} />} />
				<Route path="/quadroDeHorarios" element={cookie.token ? <Timesheet /> : <Navigate to={'/'} />} />
				<Route path="/redefinirSenha" element={cookie.token ? <ChangePassword /> : <Navigate to={'/'} />} />
				<Route path="/sobreOGinasioPernambucano" element={<AboutGP />} />
			</Rts>
		</BrowserRouter>

	);
}