import '../styles/pages/documentsRequest.css';
import { Menu } from '../components/Exports';
import { CloseMenu } from '../components/Menu';

export function DocumentsRequest(){          

    document.title = 'Solicitação de documentos';

    function showOptions(){

            let select = document.getElementById('documents-documentSelect') as HTMLSelectElement;
            let button = document.getElementById('documents-button') as HTMLButtonElement;

            let enrollmentStatementGroup = document.getElementById('enrollmentStatement-document-group')!;
            let enrollmentStatementName = document.getElementById('enrollmentStatement-document-name')!;
            let frequencyStatementGroup = document.getElementById('frequencyStatement')!;            
            let frequencyStatementName = document.getElementById('frequencyStatement-document-name')!;            
            let sheet19 = document.getElementById('sheet19')!;            


            if(select.value === 'Declaração de matrícula'){

                enrollmentStatementGroup.style.display = 'flex';
                enrollmentStatementName.style.display = 'flex';
                frequencyStatementGroup.style.display = 'none'
                frequencyStatementName.style.display = 'none'
                sheet19.style.display = 'none'            
                button.style.display = 'block'                  

            }else if (select.value === 'Declaração de frequência'){

                enrollmentStatementGroup.style.display = 'none';
                enrollmentStatementName.style.display = 'none';
                frequencyStatementGroup.style.display = 'flex'
                frequencyStatementName.style.display = 'flex'
                sheet19.style.display = 'none'  
                button.style.display = 'block'          

            }else if (select.value === 'Ficha 19'){

                enrollmentStatementGroup.style.display = 'none';
                enrollmentStatementName.style.display = 'none';
                frequencyStatementGroup.style.display = 'none'
                frequencyStatementName.style.display = 'none'
                sheet19.style.display = 'flex'  
                button.style.display = 'block'            

            }else {

                enrollmentStatementGroup.style.display = 'none';
                enrollmentStatementName.style.display = 'none';
                frequencyStatementGroup.style.display = 'none'
                frequencyStatementName.style.display = 'none'
                sheet19.style.display = 'none'  
                button.style.display = 'none'            
            }
        }            

    return(

        <div className="container">
            
            <Menu />

            <div className="documentsRequest-container" onClick={CloseMenu}>

                <h1 className="documents-h1">Solicitação de documentos</h1>
                <h2 className="documents-h2">Preencha os campos abaixo para solicitar algum documento</h2>

                <section className="documents-container">

                    <div className="document-type">

                        <p className="documents-p">Tipo de documento</p>

                        <select className="documents-documentSelect" id="documents-documentSelect" onChange={showOptions} >
                            
                            <option className="documents-documentSelect-option" value="Escolha seu documento">Escolha seu documento</option>
                            <option className="documents-documentSelect-option" value="Declaração de matrícula">Declaração de matrícula</option>
                            <option className="documents-documentSelect-option"  value="Declaração de frequência">Declaração de frequência</option>                   
                            <option className="documents-documentSelect-option" value="Ficha 19">Ficha 19</option>

                        </select>

                    </div>

                  
                    <div className="enrollmentStatement" id="enrollmentStatement-document-group">
                        
                         <p className="enrollmentStatement-group">Série / turma</p>

                          <select id="enrollmentStatement-select" className="enrollmentStatement-select">

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

                    </div>

                    <div className="enrollmentStatement-document-name" id="enrollmentStatement-document-name">
                        
                        <input required className="enrollmentStatement-name-input" type="text" />
                        <label className="enrollmentStatement-name-label">Nome do aluno</label>

                    </div>
                   


                    <div className="frequencyStatement" id="frequencyStatement">
                        
                         <p className="frequencyStatement-group">Série / turma</p>

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

                    </div>

                    <div className="frequencyStatement-document-name" id="frequencyStatement-document-name">
                        
                        <input required className="frequencyStatement-name-input" type="text" />
                        <label className="frequencyStatement-name-label">Nome do aluno</label>

                    </div>

                    <div className="sheet19" id="sheet19">
                        
                        <div className="sheet19-group" >
                            

                            <p className="sheet19-group-p">Série / turma</p>
                            
                            <select className="sheet19-select">

                                <option className="frequencyStatement-option" value="">Escolha a sua turma</option>    
                                <option className="enrollmentStatement-option" value="3° ano A - DS">3° ano A - DS</option>
                                <option className="enrollmentStatement-option" value="3° ano B - DS">3° ano B - DS</option>
                                <option className="enrollmentStatement-option" value="3° ano A - MM">3° ano A - MM</option>
                                <option className="enrollmentStatement-option" value="3° ano B - MM">3° ano B - MM</option>
                  
                            </select>

                        </div>

                        <div className="sheet19-student-name">
                            
                            <input required className="sheet19-student-name-input" type="text" />
                            <label className="sheet19-student-name-label">Nome do aluno</label>

                        </div>

                        <div className="sheet19-mother-name">
                            
                            <input required className="sheet19-mother-name-input" type="text" />
                            <label className="sheet19-mother-name-label">Nome da mãe</label>

                        </div>

                        <div className="sheet19-father-name">
                            
                            <input required className="sheet19-father-name-input" type="text" />
                            <label className="sheet19-father-name-label">Nome do pai</label>

                        </div>

                        <div className="sheet19-phone-number">
                            
                            <input required className="sheet19-phone-number-input" type="number"  onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} /> 
                            <label className="sheet19-phone-number-label">Telefone</label>

                        </div>

                        <div className="sheet19-entry-year">
                            
                            <input required className="sheet19-entry-year-input" type="number"  onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} /> 
                            <label className="sheet19-entry-year-label">Ano de entrada</label>

                        </div>

                        <div className="sheet19-outgoing-year">
                            
                            <input required className="sheet19-outgoing-year-input" type="number"  onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} /> 
                            <label className="sheet19-outgoing-year-label">Ano de conclusão</label>

                        </div>

                    </div>

                </section>             

                <button  className="documents-button" id="documents-button">Solicitar</button>

            </div>

        </div>

    );
}