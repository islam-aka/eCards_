import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import InvitePage from './pages/InvitePage'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:url' element={<Home />} />
				<Route path='/invite' element={<InvitePage />} />
			</Routes>
		</div>
	)
}

export default App
