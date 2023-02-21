import '../styles/pages/createAccount.css'
import '../styles/global.css'
import { Menu } from '../components/Exports';
import { useState } from 'react';
import { accountSchema, relativeSchema } from '../utils/validations';
import { ValidationError } from 'yup';
import { IRelative } from '../@types'
import { toast } from 'react-toastify';
import api from '../services/api';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { CloseMenu } from '../components/Exports';

export function CreateAccount() {
	const pickerOptions = ['1A-DS', '1B-DS', '1A-MULT', '1B-MULT', '2A-DS', '2B-DS', '2A-MULT', '2B-MULT', '3A-DS', '3B-DS', '3A-MULT', '3B-MULT']
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPass, setConfirmPass] = useState('')
	const [relatives, setRelatives] = useState<IRelative[]>([]);
	const [relativeName, setRelativeName] = useState('');
	const [kinship, setKinship] = useState('');
	const [schoolClass, setSchoolClass] = useState('1A-DS');
	const navigate = useNavigate();

	async function handleCreateAccount() {
		const parent = {
			fullName,
			email,
			password,
			relatives,
		};

		accountSchema.validate(parent, {
			abortEarly: false
		}).then(async () => {
			if (parent.password !== confirmPass) {
				return toast('As senhas do campo senha e confirmar senha não conferem.', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					type: 'error'
				});
			};

			if (relatives.length < 1) {
				return toast('Para se cadastrar é necessário adionar ao menos um aluno.', {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					type: 'error'
				});
			};

			const reqStatus = toast.loading('Carregando...', {
				position: 'bottom-right'
			});
			await api.http.post('/signup-parent', parent).then(() => {
				toast.update(reqStatus, {
					render: 'Conta criada com sucesso! Agora sua conta deve ser autorizada pela gestão. Assim que isso ocorrer, você receberá um email da gestão.',
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
				const data = err.response?.data as { message: string };
				return toast.update(reqStatus, {
					render: data.message,
					position: "bottom-right",
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
			err.errors.map(error => {
				return toast(error, {
					position: "top-right",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
					type: 'error'
				});
			})

		})
	}

	function addRelativeToRelativesList() {
		const relative = {
			fullName: relativeName,
			kinship,
			schoolClass
		};

		relativeSchema.validate(relative, {
			abortEarly: false
		}).then(() => {
			setRelatives([...relatives, relative])
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
					type: 'error'
				});
			})
		})
	}

	function removeRelativeFromRelativesList(relativeToRemove: IRelative) {
		setRelatives(current =>
			current.filter(relative => relative.fullName !== relativeToRemove.fullName)
		);
	}

	return (
		<>
			<div className="container">


				<Menu />
				<div className="createAccount-container" onClick={CloseMenu}>

					<h1 className="createAccount-h1" >Criar conta</h1>
					<p className="createAccount-p">Crie uma conta para poder ter acesso a conteúdos exclusivos do aplicativo.</p>

					<main className="createAccount-main">
						<p className='section-desc'>Sobre você</p>
						<div className="createAccount-user-name">
							<input value={fullName} required className="createAccount-user-name-input" type="text" onChange={e => {
								setFullName(e.target.value.toUpperCase())
							}} />
							<label className="createAccount-user-name-label">Nome completo</label>
						</div>

						<div className="createAccount-user-name">
							<input required value={email} className="createAccount-user-name-input" type="text" onChange={e => {
								setEmail(e.target.value)
							}} />
							<label className="createAccount-user-name-label">Email</label>
						</div>

						<div className="createAccount-password">
							<input value={password} required className="createAccount-password-input" type="password" onChange={e => {
								setPassword(e.target.value);
							}} />
							<label className="createAccount-password-label">Senha</label>
						</div>

						<div className="createAccount-password">
							<input value={confirmPass} required className="createAccount-password-input" type="password" onChange={e => {
								setConfirmPass(e.target.value)
							}} />
							<label className="createAccount-password-label">Confirmar senha</label>
						</div>

						<p className='section-desc'>Sobre os alunos</p>
						<div className="createAccount-password">
							<input required value={relativeName} className="createAccount-password-input" type="text" onChange={e => {
								setRelativeName(e.target.value.toUpperCase())
							}} />
							<label className="createAccount-password-label">Nome completo do estudante</label>
						</div>

						<div className="schoolClasses">
							<select name="schoolClasses-options" id="" className='schoolClasses-options' onChange={e => {
								setSchoolClass(e.target.value)
							}}>
								{
									pickerOptions.map(option => {
										return <option key={option} value={option}>{option}</option>
									})
								}
							</select>
						</div>

						<div className="createAccount-password">
							<input required value={kinship} className="createAccount-password-input" type="text" onChange={e => {
								setKinship(e.target.value.toUpperCase());
							}} />
							<label className="createAccount-password-label">Parentesco (ex: pai, mae, tio, etc...)</label>
						</div>

						<button className="buttonCreacteAccount createAccount-button" onClick={addRelativeToRelativesList} style={{ backgroundColor: '#17A1FA' }}>Adicionar aluno</button>

						<p className='section-desc'>Alunos adicionados</p>
						<div className='relatives-list'>
							{
								relatives.map(relative => {
									return (
										<div className="relative-card" key={relative.fullName}>
											<p>{relative.fullName}</p>
											<p className='relative-info'>{relative.schoolClass}</p>
											<p className='relative-info'>{relative.kinship}</p>
											<p className='remove-btn' onClick={() => removeRelativeFromRelativesList(relative)} >X Remover</p>
										</div>
									);
								})
							}
						</div>


						<button className="buttonCreacteAccount createAccount-button" onClick={handleCreateAccount}>Criar conta</button>
					</main>

				</div>
			</div>
		</>
	);
}