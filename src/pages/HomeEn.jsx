import React, { Suspense, useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../componentsEN/Header/Header'
import MainScreen from '../componentsEN/MainScreen/MainScreen'
import About from '../componentsEN/About/About'
import Opportunities from '../componentsEN/Opportunities/Opportunities'
import Conditions from '../componentsEN/Conditions/Conditions'
import Partners from '../componentsEN/Partners/Partners'
import Contacts from '../componentsEN/Contacts/Contacts'
import Footer from '../componentsEN/Footer/Footer'
import Cookie from '../components/Cookie/Cookie'
import CookieEN from '../componentsEN/Cookie/Cookie'

const Home = () => {
	const { url } = useParams()
	const [check, setCheck] = useState(true)
	const navigate = useNavigate()
	const currentPath = window.location.pathname
	function scrollToElement(url) {
		const element = document.getElementById(`#${url}`)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

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
		document.title = 'Stripe | Plateforme de traitement de paiements en ligne'
		if (url) {
			scrollToElement(url)
		}
		checkCookie()
	}, [check, url])

	return (
		<>
			{check !== false && (currentPath === '/en' ? <CookieEN /> : <Cookie />)}
			<div className={styles.home}>
				<Suspense fallback={''}>
					<Header />
					<MainScreen />
					<About />
					<Opportunities />
					<Conditions />
					<Partners />
					<Contacts />
					<Footer />
				</Suspense>
			</div>
		</>
	)
}

export default Home
