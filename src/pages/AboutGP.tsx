import React from 'react';
import { Menu } from '../components/Exports';
import '../styles/pages/aboutGP.css';

export function AboutGP() {

    document.title = 'Sobre o Ginásio';

    return (
        <div className="container">
            <Menu />

            <div className="aboutGP-container">


                <h4 className="download-document-h4">Para baixar o documento completo<a className="document-download" href="../documents/PPP 2022 Def.pdf" download> clique aqui.</a></h4>

                <main className="aboutGP-main-content">
                    <h2 className="titles">FUNÇÃO SOCIAL, VISÃO, PRINCÍPIOS E CONCEPÇÕES</h2>
                    <h3 className="subtitles">MISSÃO</h3>
                    <p className='content'>
                        Dialogar com o contexto tecnológico das empresas locais por meio da oferta dos cursos técnicos em Desenvolvimento de Sistemas e Multimídia, na área de tecnologia da informação, com foco na formação de profissionais para atender a demanda crescente desse polo tecnológico.
                    </p>
                    <h3 className="subtitles">VISÃO</h3>
                    <p className='content'>
                        Ser reconhecida como uma escola de excelência na prestação de serviços educacionais, que qualifiquem o estudante, jovem ou adulto, para o exercício da laboralidade, tornando-os aptos para responder aos desafios técnicos, culturais e sociais da contemporaneidade, a partir da profissão planejada por eles em seus projetos de vidas.
                    </p>

                    <h3 className="subtitles">PRINCÍPIOS E VALORES</h3>
                    <ul className='uls'>

                        <li>
                            <p className='content'>
                                Ética: como valor norteador das relações interpessoais.
                            </p>
                        </li>

                        <li>
                            <p className='content'>
                                Solidariedade: como forma de fortalecer os princípios de igualdade fraternidade.
                            </p>
                        </li>

                        <li>
                            <p className='content'>
                                Respeito: como elemento que deve permear a relação consigo mesmo, com o outro e com o meio ambiente.
                            </p>
                        </li>

                        <li>
                            <p className='content'>
                                Profissionalismo: não apenas como uma prática moral, mas como atitude de compromisso, dedicação e respeito a si e à comunidade.
                            </p>
                        </li>

                    </ul>

                </main>

            </div>

        </div>
    );
}