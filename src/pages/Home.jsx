import React, { Suspense, useEffect } from 'react'
import styles from './Home.module.scss'
import { useParams } from 'react-router-dom'

const Header = React.lazy(() => import('../components/Header/Header'))
const MainScreen = React.lazy(() =>
	import('../components/MainScreen/MainScreen')
)
const About = React.lazy(() => import('../components/About/About'))
const Opportunities = React.lazy(() =>
	import('../components/Opportunities/Opportunities')
)
const Conditions = React.lazy(() =>
	import('../components/Conditions/Conditions')
)
const Partners = React.lazy(() => import('../components/Partners/Partners'))
const Contacts = React.lazy(() => import('../components/Contacts/Contacts'))
const Footer = React.lazy(() => import('../components/Footer/Footer'))

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
				{/* <Partners /> */}
				{/* <Contacts /> */}
				<Footer />
			</Suspense>
		</div>
	)
}

export default Home
