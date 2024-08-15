import { toast } from 'react-toastify';
import { Patient } from '../model/Patient';
import { usePatienteStore } from '../store/store';

export default function PatientList() {
	const patients = usePatienteStore((state) => state.patients);

	const { deletePatient, getById } = usePatienteStore();

	const deletePatients = (id: string) => {
		deletePatient(id);
		toast('Eliminando Paciente!!');
	};

	const updatePatientId = (item: Patient) => {
		getById(item.id);
	};

	return (
		<>
			<div className='md:w-1/2 lg:w-3/5'>
				<h2 className='font-black text-3xl text-center'>Informacion Pacientes</h2>
				<p className='text-lg mt-5 text-center mb-10'>
					Comienza a añadir pacientes {''}
					<span className='text-indigo-600 font-bold'>Aqui</span>
				</p>

				<div className='md:h-screen overflow-y-scroll px-5 mb-5 '>
					{patients.map((patient) => (
						<div
							key={patient.id}
							className='p-2 bg-white shadow-md rounded-xl py-10 px-5 mb-5 '>
							<ul className='space-y-4'>
								<li className='flex items-center'>
									<span className='font-semibold text-gray-700 w-24'>Name:</span>
									<span className='text-gray-600'>{patient.name}</span>
								</li>
								<li className='flex items-center'>
									<span className='font-semibold text-gray-700 w-24'>
										Email:
									</span>
									<span className='text-gray-600'>{patient.email}</span>
								</li>
								<li className='flex items-center'>
									<span className='font-semibold text-gray-700 w-24'>
										Caretaker:
									</span>
									<span className='text-gray-600'>{patient.caretaker}</span>
								</li>
								<li className='flex items-center'>
									<span className='font-semibold text-gray-700 w-24'>Date:</span>
									<span className='text-gray-600'>
										{patient.date.toString()}
									</span>
								</li>
								<li className='flex items-center'>
									<span className='font-semibold text-gray-700 w-24'>
										Symptoms:
									</span>
									<span className='text-gray-600'>{patient.symptoms}</span>
								</li>
							</ul>
							<div className='flex justify-between mt-10'>
								<button
									type='button'
									className='py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg'
									onClick={() => updatePatientId(patient)}>
									Editar
								</button>

								<button
									type='button'
									className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-lg'
									onClick={() => deletePatients(patient.id)}>
									Eliminar
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
