import { useMemo } from 'react';
import { useAppStore } from '../store/useAppStore';
import ModalCustom from './modal/modal';
import DrinksDetails from './DrinksDetails';

export default function DrinksList() {
	const drinks = useAppStore((state) => state.drinks);
	const setShowModal = useAppStore((state) => state.setShowModal);
	const showModal = useAppStore((state) => state.showModal);
	const getDrinkDetails = useAppStore((state) => state.getDrinkDetails);
	const hasDrinks = useMemo(() => drinks.length, [drinks]);

	const handleFindById = (id: string): void => {
		getDrinkDetails(id);
		setShowModal(true);
	};

	return (
		<>
			{hasDrinks ? (
				<>
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 w-full h-screen overflow-auto'>
						{drinks.map((drink) => (
							<div
								key={drink.idDrink}
								className='bg-white p-4 rounded-lg shadow-md'>
								<div className=' overflow-hidden'>
									<img
										className='hover:scale-125 transition-transform hover:rotate-2 cursor-pointer'
										src={drink.strDrinkThumb}
									/>
								</div>
								<p className='text-base font-semibold text-gray-800 mt-2'>
									{drink.strDrink}
								</p>

								<a
									className='w-full text-center mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 cursor-pointer'
									onClick={() => handleFindById(drink.idDrink)}>
									Detalles
								</a>
							</div>
						))}
					</div>

					<div>
						{showModal && (
							<ModalCustom
								title='Detalle Drink'
								show={showModal}
								onClose={() => setShowModal(false)}>
								<div className='flex flex-col space-y-2'>
									<DrinksDetails />
								</div>
							</ModalCustom>
						)}
					</div>
				</>
			) : (
				<div className='m-5 text-center'>
					<span className='font-bold text-lg'>No hay Data para mostrar</span>
				</div>
			)}
		</>
	);
}
