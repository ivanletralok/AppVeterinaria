import { useForm } from 'react-hook-form';
import { usePatienteStore } from '../store/store';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import Error from './Error';
import { DraftPatient } from '../model/Patient';

export default function PatientForm() {
	const { addPatient, updatePatient } = usePatienteStore();
	const patientsId = usePatienteStore((state) => state.existId);
	const patients = usePatienteStore((state) => state.patients);

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors },
	} = useForm<DraftPatient>();

	useEffect(() => {
		if (patientsId) {
			const editPatient = patients.filter((p) => p.id === patientsId)[0];
			setValue('name', editPatient.name);
			setValue('caretaker', editPatient.caretaker);
			setValue('email', editPatient.email);
			setValue('date', editPatient.date);
			setValue('symptoms', editPatient.symptoms);
		}
	}, [patientsId, patients, setValue]);

	const registerPatient = (data: DraftPatient) => {
		if (!patientsId) {
			toast('Agregando Paciente...', { type: 'success' });
			addPatient(data);
			return;
		}
		const newItem = { ...data, id: patientsId };
		updatePatient(newItem);
		toast('Paciente actualizado...', { type: 'success' });
		reset();
	};

	return (
		<div className='md:w-1/2 lg:w-2/5 mx-5'>
			<h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

			<p className='text-lg mt-5 text-center mb-10'>
				Añade Pacientes y {''}
				<span className='text-indigo-600 font-bold'>Administralos</span>
			</p>

			<form
				className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
				noValidate
				onSubmit={handleSubmit(registerPatient)}>
				<div className='mb-5'>
					<label htmlFor='name' className='text-sm uppercase font-bold'>
						Paciente
					</label>
					<input
						id='name'
						className='w-full p-3  border border-gray-100'
						type='text'
						placeholder='Nombre del Paciente'
						{...register('name', {
							required: 'El nombre del pacientde obligatorio',
						})}
					/>
					{errors.name && <Error>{errors.name?.message}</Error>}
				</div>

				<div className='mb-5'>
					<label htmlFor='caretaker' className='text-sm uppercase font-bold'>
						Propietario
					</label>
					<input
						id='caretaker'
						className='w-full p-3  border border-gray-100'
						type='text'
						placeholder='Nombre del Propietario'
						{...register('caretaker', {
							required: 'El nombre del Propietario es obligatorio',
						})}
					/>
					{errors.caretaker && <Error>{errors.caretaker?.message}</Error>}
				</div>

				<div className='mb-5'>
					<label htmlFor='email' className='text-sm uppercase font-bold'>
						Email
					</label>
					<input
						id='email'
						className='w-full p-3  border border-gray-100'
						type='email'
						placeholder='Email de Registro'
						{...register('email', {
							required: 'El Email es Obligatorio',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Email No Válido',
							},
						})}
					/>
					{errors.email && <Error>{errors.email?.message}</Error>}
				</div>

				<div className='mb-5'>
					<label htmlFor='date' className='text-sm uppercase font-bold'>
						Fecha Alta
					</label>
					<input
						id='date'
						className='w-full p-3  border border-gray-100'
						type='date'
						{...register('date', {
							required: 'La fecha es obligatoria',
						})}
					/>
					{errors.date && <Error>{errors.date?.message}</Error>}
				</div>

				<div className='mb-5'>
					<label htmlFor='symptoms' className='text-sm uppercase font-bold'>
						Síntomas
					</label>
					<textarea
						id='symptoms'
						className='w-full p-3  border border-gray-100'
						placeholder='Síntomas del paciente'
						{...register('symptoms', {
							required: 'Los sintomas son obligatorios',
						})}
					/>
					{errors.symptoms && <Error>{errors.symptoms?.message}</Error>}
				</div>

				<input
					type='submit'
					className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
					value={!patientsId ? 'Guardar Paciente' : 'Ediatr PAciente'}
				/>
			</form>
		</div>
	);
}
