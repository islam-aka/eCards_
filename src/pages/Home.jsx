import React, { useEffect } from 'react'
import Header from '../components/Header/Header'
import MainScreen from '../components/MainScreen/MainScreen'
import About from '../components/About/About'
import Opportunities from '../components/Opportunities/Opportunities'
import Conditions from '../components/Conditions/Conditions'
import Partners from '../components/Partners/Partners'
import Contacts from '../components/Contacts/Contacts'
import Footer from '../components/Footer/Footer'
import styles from './Home.module.scss'
import { useParams } from 'react-router-dom'

const Home = () => {
	const { url } = useParams()

	function scrollToElement(url) {
		const element = document.getElementById(`#${url}`)
		console.log(element)
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' })
		}
	}

	useEffect(() => {
		if (url) {
			console.log(url)
			scrollToElement(url)
		}
	}, [url])

	return (
		<div className={styles.home}>
			<Header />
			<MainScreen />
			<About />
			<Opportunities />
			<Conditions />
			<Partners />
			<Contacts />
			<Footer />
		</div>
	)
}

export default Home
