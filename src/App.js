import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'

import Home from './pages/Home'
import HomeEN from './pages/HomeEn'
import InvitePage from './pages/InvitePage'
import InvitePageEN from './pages/InvitePageEN'

function App() {
	return (
		<div className='App'>
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
