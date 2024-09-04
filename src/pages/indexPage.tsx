import { Link } from 'react-router-dom';

export default function indexPage() {
	return (
		<>
			<div>
				<header className='bg-blue-100 text-black h-screen flex flex-col justify-center items-center text-center p-6'>
					<h1 className='text-4xl font-bold mb-4'>Bienvenido a Mi Sitio Web</h1>
					<p className='text-xl mb-6 text-gray-700'>
						Tu solución para todo lo que necesitas
					</p>
					<Link
						to='/veterinaria'
						className='bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-400 transition'>
						Descubre Más
					</Link>
				</header>
				<footer className='bg-blue-500 text-white py-6 text-center'>
					<div className='container mx-auto'>
						<p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
						<div className='flex justify-center gap-4 mt-4'>
							<a href='#' className='text-white hover:text-gray-300'>
								Facebook
							</a>
							<a href='#' className='text-white hover:text-gray-300'>
								Twitter
							</a>
							<a href='#' className='text-white hover:text-gray-300'>
								LinkedIn
							</a>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
