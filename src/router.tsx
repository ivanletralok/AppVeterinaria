import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const IndexPage = lazy(() => import('./pages/indexPage'));
const App = lazy(() => import('./App'));
const RecetasPage = lazy(() => import('./pages/RecetasPage'));
const Header = lazy(() => import('./components/Header'));

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Suspense fallback={<div>Loading Header...</div>}>
				<Header />
			</Suspense>

			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<IndexPage />} />
					<Route path='/veterinaria' element={<App />} />
					<Route path='/recetas' element={<RecetasPage />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
