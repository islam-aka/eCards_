import React, { Suspense, useEffect, useState } from 'react'
import styles from './Home.module.scss'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header/Header'
import MainScreen from '../components/MainScreen/MainScreen'
import About from '../components/About/About'
import Opportunities from '../components/Opportunities/Opportunities'
import Conditions from '../components/Conditions/Conditions'
import Partners from '../components/Partners/Partners'
import Contacts from '../components/Contacts/Contacts'
import Footer from '../components/Footer/Footer'
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
		document.title = 'eCards Виртуальные карты для вашей рекламы'
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
