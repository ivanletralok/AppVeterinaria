import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const { pathname } = useLocation();
	
	return (
		<header className='bg-gradient-to-r from-blue-500 to-teal-400 p-6 shadow-lg'>
			<div className='container mx-auto flex flex-wrap items-center justify-between'>
			
				<h1 className='text-white text-3xl font-bold'>{pathname.replace('/', '')}</h1>
				<button
					onClick={toggleMenu}
					className='text-white md:hidden block focus:outline-none'>
					<svg
						className='w-6 h-6'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16m-7 6h7'></path>
					</svg>
				</button>
				<nav
					className={`${
						isMenuOpen ? '' : 'hidden'
					} md:flex md:items-center w-full md:w-auto`}>
					<ul className='flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 w-full'>
						<li>
							<Link to='/'
								className='text-white hover:text-gray-200 block text-center md:text-left'>
								Inicio
							</Link>
						</li>
						<li>
							<Link to='/veterinaria'
								className='text-white hover:text-gray-200 block text-center md:text-left'>
								Veterinaria
							</Link>
						</li>
						<li>
							<Link to='/recetas'
								className='text-white hover:text-gray-200 block text-center md:text-left'>
								Recetas
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
