import React, { useContext, useEffect } from 'react'
import Footer from '../componentsEN/Footer/Footer'
import Header from '../componentsEN/Header/Header'
import Invite from '../componentsEN/Invite/Invite'
import FormInvite from '../componentsEN/FormInvite/FormInvite'
import { Context } from '..'

const InvitePage = () => {
	const { store } = useContext(Context)

	useEffect(() => {
		document.title = 'eCards - Virtual cards for your advertising'
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
