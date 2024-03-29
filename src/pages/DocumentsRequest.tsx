import '../styles/pages/documentsRequest.css';
import { useNavigate } from 'react-router-dom';
import { CloseMenu, Menu } from '../components/Exports';
import { useEffect, useState } from 'react';
import api from '../services/api';
import SolicitationCard from '../components/SolicitationCard';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';
import { defaultSolicitationSchema, ficha19SolicitationSchema } from '../utils/validations';
import { ValidationError } from 'yup';


interface ISolicitation {
	id: string,
	student: string,
	status: string,
	//solicitatedAt: Date,
	type: string
}

export function DocumentsRequest() {
	const schoolClasses: string[] = JSON.parse(String(localStorage.getItem('schoolClasses')));
	const finalClasses = schoolClasses.filter(schoolClass => schoolClass.includes('3'));
	const [type, setType] = useState('');
	const [schoolClass, setSchoolClass] = useState('');
	const [student, setStudent] = useState('');
	const [mother, setMother] = useState('');
	const [father, setFather] = useState('');
	const [phone, setPhone] = useState('');
	const [startYear, setStartYear] = useState('');
	const [completionYear, setCompletionYear] = useState('');
	const status = 'solicitado';
	const navigate = useNavigate();
	const parentId = localStorage.getItem('parentId');
	const [lastSolicitations, setLastSolicitations] = useState([]);

	function showOptions() {
		let select = document.getElementById('documents-documentSelect') as HTMLSelectElement;
		let button = document.getElementById('documents-button') as HTMLButtonElement;

		let enrollmentStatementGroup = document.getElementById('enrollmentStatement-document-group')!;
		let enrollmentStatementName = document.getElementById('enrollmentStatement-document-name')!;
		let frequencyStatementGroup = document.getElementById('frequencyStatement')!;
		let frequencyStatementName = document.getElementById('frequencyStatement-document-name')!;
		let sheet19 = document.getElementById('sheet19')!;


		if (select.value === 'Declaração de matrícula') {

			enrollmentStatementGroup.style.display = 'flex';
			enrollmentStatementName.style.display = 'flex';
			frequencyStatementGroup.style.display = 'none'
			frequencyStatementName.style.display = 'none'
			sheet19.style.display = 'none'
			button.style.display = 'block'

		} else if (select.value === 'Declaração de frequência') {

			enrollmentStatementGroup.style.display = 'none';
			enrollmentStatementName.style.display = 'none';
			frequencyStatementGroup.style.display = 'flex'
			frequencyStatementName.style.display = 'flex'
			sheet19.style.display = 'none'
			button.style.display = 'block'

		} else if (select.value === 'Ficha 19') {

			enrollmentStatementGroup.style.display = 'none';
			enrollmentStatementName.style.display = 'none';
			frequencyStatementGroup.style.display = 'none'
			frequencyStatementName.style.display = 'none'
			sheet19.style.display = 'flex'
			button.style.display = 'block'

		} else {

			enrollmentStatementGroup.style.display = 'none';
			enrollmentStatementName.style.display = 'none';
			frequencyStatementGroup.style.display = 'none'
			frequencyStatementName.style.display = 'none'
			sheet19.style.display = 'none'
			button.style.display = 'none'
		}
	}

	async function handleCreateSolicitation() {
		const data = {
			type,
			schoolClass,
			status,
			student,
			mother,
			father,
			phone: Number(phone),
			startYear: Number(startYear),
			completionYear: Number(completionYear),
			parentId
		};

		if (type === 'Ficha 19') {
			await ficha19SolicitationSchema.validate(data).then(async (res) => {
				const reqStatus = toast.loading('Carregando...', {
					position: 'bottom-right'
				});

				await api.http.post('/solicitation', {
					...data,
					phone,
					startYear,
					completionYear
				}).then((resp) => {
					toast.update(reqStatus, {
						render: resp.data.message,
						position: "bottom-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						type: 'success',
						isLoading: false
					});

					navigate('/');
				}).catch((err: AxiosError) => {
					const data = err.response?.data ? err.response.data as { message: string } : { message: 'Houve um erro ao enviar sua solicitação, tente novamente mais tarde.' }
					console.error(err);
					toast(data.message, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						type: 'error',
						isLoading: false
					});
				})

			}).catch((err: ValidationError) => {
				err.errors.map(err => {
					return toast(err, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						type: 'error',
					});
				})
			})
		} else {
			await defaultSolicitationSchema.validate(data).then(async res => {
				const solicitation = {
					type: res.type,
					schoolClass: res.schoolClass,
					student: res.student,
					status,
					parentId
				};

				const reqStatus = toast.loading('Carregando...', {
					position: 'bottom-right',
				});

				await api.http.post('/solicitation', {
					...solicitation
				}).then((resp) => {
					toast.update(reqStatus, {
						render: resp.data.message,
						position: "bottom-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						type: 'success',
						isLoading: false
					});

					navigate('/');
				}).catch((err: AxiosError) => {
					const data = err.response?.data ? err.response.data as { message: string } : { message: 'Houve um erro ao enviar sua solicitação, tente novamente mais tarde.' }
					console.error(err);
					toast.update(reqStatus, {
						position: "bottom-right",
						render: data.message,
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						type: 'error',
						isLoading: false
					});
				})


			}).catch((err: ValidationError) => {
				err.errors.map(err => {
					return toast(err, {
						position: "top-right",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "light",
						type: 'error',
					});
				});
			});
		}
	};

	async function handleGetLastSolicitations() {
		await api.http.get(`/solicitations/${parentId}`).then(resp => {
			setLastSolicitations(resp.data);
		}).catch((err: AxiosError) => {
			const data = err.response?.data ? err.response.data as { message: string } : { message: 'Houve um erro ao buscar suas últimas solicitações.' }
			console.error(err);
			toast(data.message, {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
				type: 'warning'
			});
		})
	};

	useEffect(() => {
		if (lastSolicitations.length < 1) {
			handleGetLastSolicitations();
		}
	}, []);

	useEffect(() => {
		setCompletionYear('')
		setFather('')
		setMother('')
		setPhone('')
		setSchoolClass('')
		setStartYear('')
		setStudent('')
	}, [type])

	return (
		<div className="container">

			<Menu />

			<div className="documentsRequest-container" onClick={CloseMenu}>

				
				<h2 className="documents-h2">Preencha os campos abaixo para solicitar algum documento</h2>

				<section className="documents-container">

					<div className="document-type">

						<p className="documents-p">Tipo de documento</p>

						<select className="documents-documentSelect" id="documents-documentSelect" onChange={e => {
							showOptions();
							setType(e.target.value);
						}}>

							<option className="documents-documentSelect-option" value="Escolha seu documento">Escolha seu documento</option>
							<option className="documents-documentSelect-option" value="Declaração de matrícula">Declaração de matrícula</option>
							<option className="documents-documentSelect-option" value="Declaração de frequência">Declaração de frequência</option>
							<option className="documents-documentSelect-option" value="Ficha 19">Ficha 19</option>

						</select>

					</div>


					<div className="enrollmentStatement" id="enrollmentStatement-document-group">

						<p className="enrollmentStatement-group">Série / turma</p>

						<select id="enrollmentStatement-select" className="enrollmentStatement-select" onChange={e => setSchoolClass(e.target.value)}>

							<option className="enrollmentStatement-option" value="">Escolha a sua turma</option>
							{
								schoolClasses.map(schoolClass => {
									return <option key={schoolClass} className="enrollmentStatement-option" value={schoolClass}>{schoolClass}</option>
								})
							}

						</select>

					</div>

					<div className="enrollmentStatement-document-name" id="enrollmentStatement-document-name">

						<input value={student} required className="enrollmentStatement-name-input" type="text"
							onChange={e => {
								setStudent(e.target.value);
							}}
						/>
						<label className="enrollmentStatement-name-label">Nome do aluno</label>

					</div>



					<div className="frequencyStatement" id="frequencyStatement">

						<p className="frequencyStatement-group">Série / turma</p>

						<select id="frequencyStatement-select" className="frequencyStatement-select" onChange={e => {
							setSchoolClass(e.target.value)
						}}>

							<option className="frequencyStatement-option" value="">Escolha a sua turma</option>
							{
								schoolClasses.map(schoolClass => {
									return <option key={schoolClass} className="enrollmentStatement-option" value={schoolClass}>{schoolClass}</option>
								})
							}

						</select>

					</div>

					<div className="frequencyStatement-document-name" id="frequencyStatement-document-name">

						<input value={student} required className="frequencyStatement-name-input" type="text"

							onChange={e => {
								setStudent(e.target.value);
							}}
						/>
						<label className="frequencyStatement-name-label">Nome do aluno</label>

					</div>

					<div className="sheet19" id="sheet19">

						<div className="sheet19-group" >


							<p className="sheet19-group-p">Série / turma</p>

							<select className="sheet19-select" onChange={e => {
								setSchoolClass(e.target.value)
							}}>

								<option className="frequencyStatement-option" value="">Escolha a sua turma</option>
								{
									finalClasses.length === 0 ?
										<option className="frequencyStatement-option" value="">Não é possível solicitar ficha 19 sem ser terceiranista</option>
										:
										finalClasses.map(finalClass => {
											return <option className="frequencyStatement-option" value={finalClass}>{finalClass}</option>
										})
								}

							</select>

						</div>

						<div className="sheet19-student-name">

							<input value={student} required className="sheet19-student-name-input" type="text"
								onChange={e => {
									setStudent(e.target.value);
								}}

							/>
							<label className="sheet19-student-name-label">Nome do aluno</label>

						</div>

						<div className="sheet19-mother-name">

							<input value={mother} required className="sheet19-mother-name-input" type="text"

								onChange={e => {
									setMother(e.target.value);
								}}
							/>
							<label className="sheet19-mother-name-label">Nome da mãe</label>

						</div>

						<div className="sheet19-father-name">

							<input required className="sheet19-father-name-input" type="text"
								value={father}
								onChange={e => {
									setFather(e.target.value);
								}}
							/>
							<label className="sheet19-father-name-label">Nome do pai</label>

						</div>

						<div className="sheet19-phone-number">

							<input required className="sheet19-phone-number-input" type="number" onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
								value={phone}
								onChange={e => {
									setPhone(e.target.value);
								}}
							/>
							<label className="sheet19-phone-number-label">Telefone</label>

						</div>

						<div className="sheet19-entry-year">

							<input required className="sheet19-entry-year-input" type="number" onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}
								value={startYear}
								onChange={e => {
									setStartYear(e.target.value);
								}}
							/>
							<label className="sheet19-entry-year-label">Ano de entrada</label>

						</div>

						<div className="sheet19-outgoing-year">

							<input value={completionYear} required className="sheet19-outgoing-year-input" type="number" onKeyPress={(event) => { if (!/[0-9]/.test(event.key)) { event.preventDefault(); } }}

								onChange={e => {
									setCompletionYear(e.target.value);
								}}
							/>
							<label className="sheet19-outgoing-year-label">Ano de conclusão</label>

						</div>

					</div>

				</section>

				<button className="documents-button" id="documents-button" onClick={handleCreateSolicitation}>Solicitar</button>

				<div className='solicitations-list-container'>

					<div className="solicitations">
						<h3>Status de suas últimas solicitações:</h3>

						<div className="solicitations-list">
							{
								lastSolicitations.map((solicitation: ISolicitation) => {
									return (
										<SolicitationCard
											key={solicitation.id}
											status={solicitation.status}
											student={solicitation.student}
											type={solicitation.type}
										/>
									);
								})
							}
						</div>
					</div>
				</div>
			</div>



		</div>
	);
}