import { create } from 'zustand';
import { DraftPatient, Patient } from '../model/Patient';

interface PatientStore {
	patients: Patient[];
	existId: string;
	addPatient: (patient: DraftPatient) => void;
	updatePatient: (patient: Patient) => void;
	deletePatient: (id: string) => void;
	getById: (id: string) => void;
}

const creatPatient = (patient: DraftPatient) => {
	return { ...patient, id: Math.random().toString(36) };
};

export const usePatienteStore = create<PatientStore>((set) => ({
	patients: [],
	existId: '',

	addPatient: (data) => {
		const newPatient = creatPatient(data);
		set((state) => ({
			patients: [...state.patients, newPatient],
		}));
	},

	updatePatient: (patient: Patient) => {
		set((state) => ({
			patients: state.patients.map((p) =>
				p.id === patient.id ? { ...p, ...patient } : p
			),
			existId: '',
		}));
	},

	deletePatient: (id: string) => {
		set((state) => ({
			patients: state.patients.filter((p) => p.id !== id),
		}));
	},

	getById: (id: string) => {
		set(() => ({
			existId: id,
		}));
	},
}));
