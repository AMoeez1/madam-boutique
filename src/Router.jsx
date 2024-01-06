import {
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Product from './pages/Product';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/products' element={<Products />}></Route>
				<Route path='/product/:slug' element={<Product />}></Route>
			</Routes>
		</BrowserRouter>
	)
}
