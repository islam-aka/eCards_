import React, { Suspense, useEffect } from 'react'
import styles from './Home.module.scss'
import { useParams } from 'react-router-dom'
import Header from '../componentsEN/Header/Header'
import MainScreen from '../componentsEN/MainScreen/MainScreen'
import About from '../componentsEN/About/About'
import Opportunities from '../componentsEN/Opportunities/Opportunities'
import Conditions from '../componentsEN/Conditions/Conditions'
import Partners from '../componentsEN/Partners/Partners'
import Contacts from '../componentsEN/Contacts/Contacts'
import Footer from '../componentsEN/Footer/Footer'

const Home = () => {
	const { url } = useParams()

	function scrollToElement(url) {
		const element = document.getElementById(`#${url}`)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		if (url) {
			scrollToElement(url)
		}
	}, [url])

	return (
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
	)
}

export default Home
