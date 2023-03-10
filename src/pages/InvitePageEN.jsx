import React, { useContext, useEffect } from 'react'
import Footer from '../componentsEN/Footer/Footer'
import Header from '../componentsEN/Header/Header'
import Invite from '../componentsEN/Invite/Invite'
import FormInvite from '../componentsEN/FormInvite/FormInvite'
import { Context } from '..'
import { Helmet } from 'react-helmet'

const InvitePage = () => {
	const { store } = useContext(Context)

	useEffect(() => {
		store.setLink(0)
	})

	return (
		<>
			<Helmet>
				<title>eCards | Virtual cards</title>
				<meta name='description' content='Virtual cards for your advertising' />
			</Helmet>
			<Header />
			<Invite />
			<FormInvite />
			<Footer />
		</>
	)
}

export default InvitePage
