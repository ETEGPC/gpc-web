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
	AboutGP,
	CreateAccount
} from '../components/Exports';

export function Routes() {
	const [cookie] = useCookies(['token']);

	return (
		<BrowserRouter>
			<Rts>
				<Route path="/" element={<HomePage />} />
				<Route path='*' element={<HomePage />} />
				<Route path='/criarConta' element={<CreateAccount />} />
				<Route path="/ultimasNoticias" element={<LatestNews />} />
				<Route path="/chat" element={cookie.token ? <Chat /> : <Navigate to={'/login'} />}></Route>
				<Route path="/nossaAgenda" element={cookie.token ? <OurAgend /> : <Navigate to={'/login'} />}></Route>
				<Route path="/paginaInicial" element={<HomePage />}></Route>
				<Route path="/meuPerfil" element={cookie.token ? <MyProfile /> : <Navigate to={'/login'} />} />
				<Route path="/solicitacaoDeDocumentos" element={cookie.token ? <DocumentsRequest /> : <Navigate to={'/login'} />} />
				<Route path="/muralDeAvisos" element={cookie.token ? <BulletinBoard /> : <Navigate to={'/login'} />} />
				<Route path="/quadroDeHorarios" element={cookie.token ? <Timesheet /> : <Navigate to={'/login'} />} />
				<Route path="/redefinirSenha" element={cookie.token ? <ChangePassword /> : <Navigate to={'/login'} />} />
				<Route path="/sobreOGinasioPernambucano" element={<AboutGP />} />
				<Route path="/login" element={<LoginScreen />} />
			</Rts>
		</BrowserRouter>

	);
}