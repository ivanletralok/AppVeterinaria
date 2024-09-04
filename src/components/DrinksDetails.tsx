import { useAppStore } from '../store/useAppStore';

export default function DrinksDetails() {
	const drinkDetails = useAppStore((state) => state?.drinkDetails[0]);

	return (
		<>
			<div>
				<img
					className='mx-auto w-64 rounded-lg'
					src={drinkDetails?.strDrinkThumb}
					alt=''
				/>
				<p className='font-bold'>{drinkDetails?.strDrink}</p>
				<p>{drinkDetails?.strInstructions}</p>

				<div className='flex justify-end m-2 border-blue-500'>
					<button
						className='bg-blue-500 rounded-lg p-1 text-white text-center cursor-pointer hover:bg-blue-700 border-none focus:outline-none w-20'
						onClick={() => useAppStore.getState().setShowModal(false)}
					>
						Cerrar
					</button>
				</div>
			</div>
		</>
	);
}
