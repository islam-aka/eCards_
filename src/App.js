import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cookie from './components/Cookie/Cookie'

import Home from './pages/Home'
import InvitePage from './pages/InvitePage'

function App() {
	const [check, setCheck] = useState(true)
	function checkCookie() {
		const cookies = document.cookie.split(';')
		const myCookie = cookies.find(cookie =>
			cookie.trim().startsWith('language=')
		)

		if (localStorage.getItem('i18nextLng')) {
		} else {
			setCheck(myCookie === undefined)
		}
	}

	useEffect(() => {
		checkCookie()
	}, [check])

	return (
		<div className='App'>
			{check && <Cookie />}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:url' element={<Home />} />
				<Route path='/invite' element={<InvitePage />} />
			</Routes>
		</div>
	)
}

export default App
