import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import PatientForm from './components/PatientForm';
import PatientList from './components/PatientList';

function App() {
	return (
		<>
			<div className='container mx-auto mt-15'>
				<h1 className='font-black text-4xl text-center md:w-2/3 md:mx-auto'>
					Seguiemiento de Pacientes {''}
					<span className='text-indigo-700'>Veterinaria</span>
				</h1>
				
				<div className='mt-12 md:flex'>
				  <PatientForm />
				  <PatientList />
				</div>
			</div>
			
			<ToastContainer />
		</>
	);
}

export default App;
