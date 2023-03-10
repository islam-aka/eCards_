import React, { useContext, useEffect } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Invite from '../components/Invite/Invite'
import FormInvite from '../components/FormInvite/FormInvite'
import { Context } from '..'
import { Helmet } from 'react-helmet'

const InvitePage = () => {
	const { store } = useContext(Context)

	useEffect(() => {
		store.setLink(0)
	}, [])

	return (
		<>
			<Helmet>
				<title>eCards | Виртуальные карты для вашей рекламы</title>
			</Helmet>
			<Header />
			<Invite />
			<FormInvite />
			<Footer />
		</>
	)
}

export default InvitePage
