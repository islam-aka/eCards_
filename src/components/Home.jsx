import React from 'react'
import About from './About/About'
import Conditions from './Conditions/Conditions'
import Contacts from './Contacts/Contacts'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import MainScreen from './MainScreen/MainScreen'
import Opportunities from './Opportunities/Opportunities'
import Partners from './Partners/Partners'
import styles from './Home.module.scss'

const Home = () => {
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
