import React, { useContext, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Invite from '../components/Invite/Invite'
import FormInvite from '../components/FormInvite/FormInvite'
import { Context } from '..'

const InvitePage = () => {
	const { store } = useContext(Context)

	useEffect(() => {
		document.title = 'eCards I Виртуальные карты для вашей рекламы'
		store.setLink(0)
	})

	return (
		<>
			<Header />
			<Invite />
			<FormInvite />
			<Footer />
		</>
	)
}

export default InvitePage
