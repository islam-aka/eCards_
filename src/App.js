import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Cookie from './components/Cookie/Cookie'
import CookieEN from './componentsEN/Cookie/Cookie'

import Home from './pages/Home'
import HomeEN from './pages/HomeEn'
import InvitePage from './pages/InvitePage'
import InvitePageEN from './pages/InvitePageEN'

function App() {
	const [check, setCheck] = useState(true)
	const navigate = useNavigate()
	const currentPath = window.location.pathname

	const checkCookie = () => {
		if (localStorage.getItem('locales') !== null) {
			if (localStorage.getItem('locales') === 'ru') {
				navigate('/')
			} else {
				navigate('/en')
			}
			setCheck(false)
		} else {
			navigate('/en')
			setCheck(true)
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
