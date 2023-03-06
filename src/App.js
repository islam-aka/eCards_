import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Cookie from './components/Cookie/Cookie'
import CookieEN from './componentsEN/Cookie/Cookie'

import Home from './pages/Home'
import HomeEN from './pages/HomeEn'
import InvitePage from './pages/InvitePage'
import InvitePageEN from './pages/InvitePageEN'

function App() {
	const [check, setCheck] = useState(true)
	const currentPath = window.location.pathname
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
			{check !== false && (currentPath === '/en' ? <CookieEN /> : <Cookie />)}
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/en' element={<HomeEN />} />
				<Route path='/:url' element={<Home />} />
				<Route path='/invite' element={<InvitePage />} />
				<Route path='/inviteEN' element={<InvitePageEN />} />
			</Routes>
		</div>
	)
}

export default App
