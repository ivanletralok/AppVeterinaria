import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import DrinksList from './DrinksList';
import ModalCustom from './modal/modal';

export default function FormRecetas() {
	const [searchFilters, setSearchFilters] = useState({
		ingredient: '',
		category: '',
	});
	const fetchCategories = useAppStore((state) => state.fetchCategories);
	const searchRecipe = useAppStore((state) => state.searchRecipe);
	const categories = useAppStore((state) => state.categories);
	const [showModal, setShowModal] = useState(false);

	const { drinks } = categories;

	useEffect(() => {
		fetchCategories();
		useAppStore.getState().drinks = [];
	}, [fetchCategories, searchRecipe]);

	const handleChange = (
		e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
	) => {
		setSearchFilters({
			...searchFilters,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (Object.values(searchFilters).includes('')) {
			setShowModal(true);
			return;
		}
		searchRecipe(searchFilters);
	};

	return (
		<>
			<div className='w-full flex justify-center my-4'>
				<form
					className='w-full max-w-4xl bg-blue-300 p-6 rounded-lg shadow-md flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0'
					onSubmit={handleSubmit}>
					<div className='flex flex-col flex-1 space-y-2'>
						<label
							className='block text-blue-900 uppercase font-bold text-lg'
							htmlFor='ingredient'>
							Ingredientes
						</label>
						<input
							id='ingredient'
							name='ingredient'
							type='text'
							className='p-3 rounded-lg border border-blue-400 focus:outline-none focus:border-blue-600 w-full'
							placeholder='Ingredientes'
							onChange={handleChange}
							value={searchFilters.ingredient}
						/>
					</div>

					<div className='flex flex-col flex-1 space-y-2'>
						<label
							className='block text-blue-900 uppercase font-bold text-lg'
							htmlFor='category'>
							Categoria
						</label>
						<select
							id='category'
							className='p-3 rounded-lg border border-blue-400 focus:outline-none focus:border-blue-600 w-full'
							name='category'
							onChange={handleChange}
							value={searchFilters.category}>
							<option value=''>--- Seleccione ---</option>
							{drinks.map((drink) => (
								<option key={drink.strCategory} value={drink.strCategory}>
									{drink.strCategory}
								</option>
							))}
						</select>
					</div>
					<div className='flex pt-9  max-[320px]:p-0 min-[320px]:justify-center'>
						<button
							type='submit'
							className=' bg-blue-800 text-white uppercase font-bold p-3 rounded-lg hover:bg-blue-900 focus:outline-none flex-shrink-0 h-12'>
							Buscar
						</button>
					</div>
				</form>
			</div>

			<hr />

			<DrinksList />

			<ModalCustom title='' show={showModal} onClose={() => setShowModal(false)}>
				<p className='font-bold text-center'>Todos los Campos son Requeridos</p>
			</ModalCustom>
		</>
	);
}
