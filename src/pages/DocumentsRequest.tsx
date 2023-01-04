import '../styles/pages/documentsRequest.css';
import { useEffect } from 'react';
import { Menu } from '../components/Exports';


export function DocumentsRequest(){        
        

        function showOptions(){

            let select = document.getElementById('documents-documentSelect') as HTMLSelectElement;
            let button = document.getElementById('documents-button') as HTMLButtonElement;

            let enrollmentStatement = document.getElementById('enrollmentStatement')!;
            let frequencyStatement = document.getElementById('frequencyStatement')!;
            let sheet18 = document.getElementById('sheet18')!;
            let sheet19 = document.getElementById('sheet19')!;
            
            if(select.value == 'Declaração de matrícula'){

                enrollmentStatement.style.visibility = 'initial';
                enrollmentStatement.style.position = 'relative';
                frequencyStatement.style.visibility = 'hidden';
                frequencyStatement.style.position = 'absolute';
                sheet18.style.visibility = 'hidden';
                sheet18.style.position = 'absolute';
                sheet19.style.visibility = 'hidden';
                sheet19.style.position = 'absolute';

                button.style.display = 'block';
                

            }else if (select.value == 'Declaração de frequência'){

                enrollmentStatement.style.visibility = 'hidden';
                enrollmentStatement.style.position = 'absolute';
                frequencyStatement.style.visibility = 'initial';
                frequencyStatement.style.position = 'relative';
                sheet18.style.visibility = 'hidden';
                sheet18.style.position = 'absolute';   
                sheet19.style.visibility = 'hidden';
                sheet19.style.position = 'absolute';                  
                
                button.style.display = 'block';

            }else if (select.value == 'Ficha 18'){

                enrollmentStatement.style.visibility = 'hidden';
                enrollmentStatement.style.position = 'absolute';
                frequencyStatement.style.visibility = 'hidden';
                frequencyStatement.style.position = 'absolute';
                sheet18.style.visibility = 'initial';
                sheet18.style.position = 'relative';
                sheet19.style.visibility = 'hidden';
                sheet19.style.position = 'absolute';               
                
                button.style.display = 'block';

            }else if (select.value == 'Ficha 19'){

                enrollmentStatement.style.visibility = 'hidden';
                enrollmentStatement.style.position = 'absolute';
                frequencyStatement.style.visibility = 'hidden';
                frequencyStatement.style.position = 'absolute';
                sheet18.style.visibility = 'hidden';
                sheet18.style.position = 'absolute';
                sheet19.style.visibility = 'initial';
                sheet19.style.position = 'relative';                
                
                button.style.display = 'block';

            }else {

                enrollmentStatement.style.visibility = 'hidden';
                enrollmentStatement.style.position = 'absolute';
                frequencyStatement.style.visibility = 'hidden';
                frequencyStatement.style.position = 'absolute';
                sheet18.style.visibility = 'hidden';
                sheet18.style.position = 'absolute';
                sheet19.style.visibility = 'hidden';
                sheet19.style.position = 'absolute';                
                
                button.style.display = 'none';
            }
        }            

    return(

        <div>
            
            <Menu />

            <h1 className="documents-h1">Solicitação de documentos</h1>
            <h2 className="documents-h2">Preencha os campos abaixo para solicitar algum documento</h2>

            <section className="document-type">

                <p className="documents-p">Tipo de documento:</p>

                <select className="documents-documentSelect" id="documents-documentSelect" onChange={showOptions} >
                    
                    <option className="documents-documentSelect-option" value="Escolha seu documento">Escolha seu documento</option>
                    <option className="documents-documentSelect-option" value="Declaração de matrícula">Declaração de matrícula</option>
                    <option className="documents-documentSelect-option"  value="Declaração de frequência">Declaração de frequência</option>
                    <option className="documents-documentSelect-option" value="Ficha 18">Ficha 18</option>
                    <option className="documents-documentSelect-option" value="Ficha 19">Ficha 19</option>

                </select>

            </section>

            <section className="enrollmentStatement" id="enrollmentStatement">

                    <p className="enrollmentStatement-group">Série/turma:</p>
                    
                    <select id="enrollmentStatement-select" className="enrollment-select">

                        <option className="enrollmentStatement-option" value="">Escolha a sua turma</option>    
                        <option className="enrollmentStatement-option" value="1° ano A - DS">1° ano A - DS</option>
                        <option className="enrollmentStatement-option" value="1° ano B - DS">1° ano B - DS</option>
                        <option className="enrollmentStatement-option" value="1° ano A - MM">1° ano A - MM</option>
                        <option className="enrollmentStatement-option" value="1° ano B - MM">1° ano B - MM</option>

                        <option className="enrollmentStatement-option" value="2° ano A - DS">2° ano A - DS</option>
                        <option className="enrollmentStatement-option" value="2° ano B - DS">2° ano B - DS</option>
                        <option className="enrollmentStatement-option" value="2° ano A - MM">2° ano A - MM</option>
                        <option className="enrollmentStatement-option" value="2° ano B - MM">2° ano B - MM</option>

                        <option className="enrollmentStatement-option" value="3° ano A - DS">3° ano A - DS</option>
                        <option className="enrollmentStatement-option" value="3° ano B - DS">3° ano B - DS</option>
                        <option className="enrollmentStatement-option" value="3° ano A - MM">3° ano A - MM</option>
                        <option className="enrollmentStatement-option" value="3° ano B - MM">3° ano B - MM</option>

                        <option className="enrollmentStatement-option" value="Módulo I - DS">Módulo I - DS</option>
                        <option className="enrollmentStatement-option" value="Módulo II - DS">Módulo II - DS</option>
                        <option className="enrollmentStatement-option" value="Módulo III - DS">Módulo III - DS</option>
                        <option className="enrollmentStatement-option" value="Módulo I - MM">Módulo I - MM</option>
                        <option className="enrollmentStatement-option" value="Módulo II - MM">Módulo II - MM</option>
                        <option className="enrollmentStatement-option" value="Módulo III - MM">Módulo III - MM</option>               

                     </select>

                    <p className="enrollmentStatement-name">Nome do aluno:</p>

                    <input className="enrollmentStatement-name-input" type="text" />

            </section>

            <section className="frequencyStatement" id="frequencyStatement">

                    <p className="frequencyStatement-group">Série/turma:</p>
                    
                    <select id="frequencyStatement-select" className="frequencyStatement-select">

                        <option className="frequencyStatement-option" value="">Escolha a sua turma</option>    
                        <option className="frequencyStatement-option" value="1° ano A - DS">1° ano A - DS</option>
                        <option className="frequencyStatement-option" value="1° ano B - DS">1° ano B - DS</option>
                        <option className="frequencyStatement-option" value="1° ano A - MM">1° ano A - MM</option>
                        <option className="frequencyStatement-option" value="1° ano B - MM">1° ano B - MM</option>

                        <option className="frequencyStatement-option" value="2° ano A - DS">2° ano A - DS</option>
                        <option className="frequencyStatement-option" value="2° ano B - DS">2° ano B - DS</option>
                        <option className="frequencyStatement-option" value="2° ano A - MM">2° ano A - MM</option>
                        <option className="frequencyStatement-option" value="2° ano B - MM">2° ano B - MM</option>

                        <option className="frequencyStatement-option" value="3° ano A - DS">3° ano A - DS</option>
                        <option className="frequencyStatement-option" value="3° ano B - DS">3° ano B - DS</option>
                        <option className="frequencyStatement-option" value="3° ano A - MM">3° ano A - MM</option>
                        <option className="frequencyStatement-option" value="3° ano B - MM">3° ano B - MM</option>

                        <option className="frequencyStatement-option" value="Módulo I - DS">Módulo I - DS</option>
                        <option className="frequencyStatement-option" value="Módulo II - DS">Módulo II - DS</option>
                        <option className="frequencyStatement-option" value="Módulo III - DS">Módulo III - DS</option>
                        <option className="frequencyStatement-option" value="Módulo I - MM">Módulo I - MM</option>
                        <option className="frequencyStatement-option" value="Módulo II - MM">Módulo II - MM</option>
                        <option className="frequencyStatement-option" value="Módulo III - MM">Módulo III - MM</option>               

                     </select>

                    <p className="frequencyStatement-name">Nome do aluno:</p>

                    <input className="frequencyStatement-name-input" type="text" />

            </section>
           

            <section className="sheet18" id="sheet18">

                    <p className="sheet18-group">Série/turma:</p>
                    
                    <select className="sheet18-select">

                        <option className="enrollmentStatement-option" value="">Escolha a sua turma</option>    
                        <option className="enrollmentStatement-option" value="1° ano A - DS">1° ano A - DS</option>
                        <option className="enrollmentStatement-option" value="1° ano B - DS">1° ano B - DS</option>
                        <option className="enrollmentStatement-option" value="1° ano A - MM">1° ano A - MM</option>
                        <option className="enrollmentStatement-option" value="1° ano B - MM">1° ano B - MM</option>

                        <option className="enrollmentStatement-option" value="2° ano A - DS">2° ano A - DS</option>
                        <option className="enrollmentStatement-option" value="2° ano B - DS">2° ano B - DS</option>
                        <option className="enrollmentStatement-option" value="2° ano A - MM">2° ano A - MM</option>
                        <option className="enrollmentStatement-option" value="2° ano B - MM">2° ano B - MM</option>

                        <option className="enrollmentStatement-option" value="3° ano A - DS">3° ano A - DS</option>
                        <option className="enrollmentStatement-option" value="3° ano B - DS">3° ano B - DS</option>
                        <option className="enrollmentStatement-option" value="3° ano A - MM">3° ano A - MM</option>
                        <option className="enrollmentStatement-option" value="3° ano B - MM">3° ano B - MM</option>

                        <option className="enrollmentStatement-option" value="Módulo I - DS">Módulo I - DS</option>
                        <option className="enrollmentStatement-option" value="Módulo II - DS">Módulo II - DS</option>
                        <option className="enrollmentStatement-option" value="Módulo III - DS">Módulo III - DS</option>
                        <option className="enrollmentStatement-option" value="Módulo I - MM">Módulo I - MM</option>
                        <option className="enrollmentStatement-option" value="Módulo II - MM">Módulo II - MM</option>
                        <option className="enrollmentStatement-option" value="Módulo III - MM">Módulo III - MM</option>             

                    </select>


                    <p className="sheet18-name">Nome do aluno:</p>
                    <input className="sheet18-name-input" type="text" />


                    <p className="sheet18-mother-name">Nome da mãe:</p>
                    <input className="sheet18-mother-name-input" type="text" />


                    <p className="sheet18-father-name">Nome do pai:</p>
                    <input className="sheet18-father-name-input" type="text" />

                    <p className="sheet18-phone-number">Telefone:</p>
                    <input className="sheet18-phone-number-input" type="number" />

            </section>
            

            <section className="sheet19" id="sheet19">

                    <p className="sheet19-group">Série/turma:</p>
                    
                    <select className="sheet19-select">

                        <option className="enrollmentStatement-option" value="">Escolha a sua turma</option>    
                        <option className="enrollmentStatement-option" value="1° ano A - DS">1° ano A - DS</option>
                        <option className="enrollmentStatement-option" value="1° ano B - DS">1° ano B - DS</option>
                        <option className="enrollmentStatement-option" value="1° ano A - MM">1° ano A - MM</option>
                        <option className="enrollmentStatement-option" value="1° ano B - MM">1° ano B - MM</option>

                        <option className="enrollmentStatement-option" value="2° ano A - DS">2° ano A - DS</option>
                        <option className="enrollmentStatement-option" value="2° ano B - DS">2° ano B - DS</option>
                        <option className="enrollmentStatement-option" value="2° ano A - MM">2° ano A - MM</option>
                        <option className="enrollmentStatement-option" value="2° ano B - MM">2° ano B - MM</option>

                        <option className="enrollmentStatement-option" value="3° ano A - DS">3° ano A - DS</option>
                        <option className="enrollmentStatement-option" value="3° ano B - DS">3° ano B - DS</option>
                        <option className="enrollmentStatement-option" value="3° ano A - MM">3° ano A - MM</option>
                        <option className="enrollmentStatement-option" value="3° ano B - MM">3° ano B - MM</option>

                        <option className="enrollmentStatement-option" value="Módulo I - DS">Módulo I - DS</option>
                        <option className="enrollmentStatement-option" value="Módulo II - DS">Módulo II - DS</option>
                        <option className="enrollmentStatement-option" value="Módulo III - DS">Módulo III - DS</option>
                        <option className="enrollmentStatement-option" value="Módulo I - MM">Módulo I - MM</option>
                        <option className="enrollmentStatement-option" value="Módulo II - MM">Módulo II - MM</option>
                        <option className="enrollmentStatement-option" value="Módulo III - MM">Módulo III - MM</option>             

                    </select>


                    <p className="sheet19-name">Nome do aluno:</p>
                    <input className="sheet19-name-input" type="text" />


                    <p className="sheet19-mother-name">Nome da mãe:</p>
                    <input className="sheet19-mother-name-input" type="text" />


                    <p className="sheet19-father-name">Nome do pai:</p>
                    <input className="sheet19-father-name-input" type="text" />

                    <p className="sheet19-phone-number">Telefone:</p>
                    <input className="sheet19-phone-number-input" type="number" />

            </section>

            <button  className="documents-button" id="documents-button">Solicitar</button>

        </div>

    );
}