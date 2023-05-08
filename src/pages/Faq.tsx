import { Link } from "react-router-dom";
import { Menu } from "../components/Menu";
import '../styles/pages/faq.css';

export function Faq() {
  return (
    <div className="container">
      <Menu />
      <div className="faq-container">
        
        <p className="faq-description">Antes de proseguir para a página de chat, por favor dê uma olhada nas perguntas mais comuns e veja se elas conseguem resolver sua dúvida.</p>
        <details>
          <summary>Como funciona o processo seletivo? </summary>
          <p>Avaliação online.</p>
        </details>

        <details>
          <summary>Quais os cursos que a escola oferta? </summary>
          <p>Multimídia e Desenvolvimento de Sistemas.</p>
        </details>

        <details>
          <summary >Quem pode solicitar a carteira de estudante? </summary>
          <p>O estudante devidamente matriculado em algum Curso Técnico da escola. Inclusive os matriculados em algum Curso Técnico Subsequente.</p>
        </details>

        <details>
          <summary >Qual site eu solicito e cadastro para a carteira de estudante? </summary>
          <p>A carteira de estudante pode ser solicitada através do site abaixo:</p>
          <a href="https://estudante.ciepe.com.br" target="_blank" rel="noreferrer">https://estudante.ciepe.com.br</a>
        </details>

        <details>
          <summary >Quanto tempo demora para a carteira de estudante ficar pronta? </summary>
          <p>Após o pagamento, 30 dias corridos. A escola faz a retirada e entrega ao estudante na escola.</p>
        </details>

        <details>
          <summary >Qual o site eu solicito o Cartão Vem Estudantil ou Cartão Estudantil Passe Livre Metropolitano?</summary>
          <a href="https://vempostovirtual.vemgranderecife.com.br/institucional" target='_blank' rel="noreferrer">https://vempostovirtual.vemgranderecife.com.br/institucional</a>
          <p>Devendo no ato do cadastro informar  seu CPF e um e-mail válido para recebimento do link de acesso.</p>
        </details>

        <details>
          <summary>Quais documentos são necessários para solicitar o Cartão Vem Estudantil ou Cartão Estudantil Passe Livre Metropolitano?</summary>
          <br />
          <b>Documento com foto (RG ou CNH) ou Certidão de Nascimento (menores de 16 anos)</b>
          <br />
          <b>CPF</b>
          <br />
          <b>Carteira de estudante</b>
          <br />
          <b>Comprovante de matrìcula</b>
          <br />
          <b>Foto 3x4 com fundo branco</b>
        </details>

        <details>
          <summary >A escola recebe novos alunos no segundo/terceiro ano ou somente no primeiro ano? </summary>
          <p>Não, a escola recebe apenas estudantes que fizeram o processo seletivo ainda no 9º ano para ingresso apenas no 1º ano do Ensino Médio.</p>
        </details>

        <details>
          <summary>Sou primeiro ano atualmente e quero tentar entrar na escola ano que vem, terei que fazer o primeiro ano novamente? </summary>
          <p>Sim, a entrada nas ETEs são exclusivamente através de processo seletivo.</p>
        </details>

        <details>
          <summary> Qual o número de contato de vocês? </summary>
          <p>
            31812949 - Secretaria<br />
            31812948 - Gestão
          </p>
        </details>

        <details>
          <summary>Onde a escola fica localizada? </summary>
          <p>Avenida Cruz Cabugá, 269.</p>
        </details>

        <details>
          <summary>O turno da noite (subsequente) é só para quem já terminou o ensino médio? </summary>
          <p>Sim.</p>
        </details>

        <details>
          <summary>Quem pode solicitar Declaração de Matrícula ou Vínculo? Qual o prazo de entrega?</summary>
          <p>O próprio ou a própria estudante pode solicitar na Secretaria da Escola. O prazo é de no máximo um dia.</p>
        </details>

        <details>
          <summary>A escola é climatizada? </summary>
          <p>Todas as salas da ETE Ginásio Pernambucano estão climatizadas.</p>
        </details>

        <details>
          <summary>O aluno pode levar almoço de casa? </summary>
          <p>É garantido ao estudante da escola em tempo integral três refeições: lanche da manhã, almoço e lanche da tarde, por esse motivo não é permitido ao estudante levar o almoço de casa, salvo exceções para estudantes que apresentarem laudo médico.</p>
        </details>

        <details>
          <summary>Qual o tempo de duração do subsequente (noite)? </summary>
          <p>18 meses.</p>
        </details>

        <details>
          <summary>Quem pode solicitar transferência? Qual o prazo de entrega? </summary>
          <p>Apenas o responsável do (a) estudante, caso este (a) seja menor de 18 anos. O prazo do documento definitivo é 30 dias corridos.</p>
        </details>

        <details>
          <summary>Quem pode solicitar Histórico Escolar? </summary>
          <p>O ex-aluno (a) que estudou na Escola, sendo acima dos 18 anos ou pessoa autorizada pelo ex-aluno (a) com documentação (RG ou CNH válida ou Carteira de Trabalho ou Passaporte).</p>
        </details>


        <p className="faq-description">Caso essas informações não tenham suprido sua necessidade, por favor prossiga para o chat.</p>
        <Link className="continue-to-chat-button" to={'/chat'}>
          Prosseguir para o chat
        </Link>
      </div>
    </div>
  );
}