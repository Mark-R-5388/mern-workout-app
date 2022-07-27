import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<div className='pages'>
					<Routes>
						<Route path='/' element={<Home />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
