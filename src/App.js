import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Invite from './components/Invite/Invite'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/invite' element={<Invite />} />
			</Routes>
		</div>
	)
}

export default App
