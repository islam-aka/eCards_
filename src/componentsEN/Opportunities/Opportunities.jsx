import React, { useContext, useEffect } from 'react'
import styles from '../../components/Opportunities/Opportunities.module.scss'
import Score from './Score/Score'
import Cards from './Cards/Cards'
import Distribution from './Distribution/Distribution'
import 'aos'
import Data from './Data/Data'
import Notification from './Notification/Notification'
import { Context } from '../..'

const Opportunities = () => {
	const { store } = useContext(Context)

	function test() {
		const scrollPosition = window.scrollY
		const section2 = document.getElementById('sectionEN2')
		const section3 = document.getElementById('sectionEN3')
		if (
			scrollPosition + 200 >= section2.offsetTop &&
			scrollPosition < section3.offsetTop
		) {
			store.setLink(2)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', test)
		return () => window.removeEventListener('scroll', test)
	})

	return (
		<div id='sectionEN2' className={styles.container}>
			<div className={styles.link} id='sectionEN-2'></div>
			<div className={styles.container__title}>
				<p>eCards provides</p>
				<h2>Features</h2>
			</div>

			<div className={styles.opportunities}>
				<div className={styles.blockBlur}></div>
				<Score />
				<Cards />
				<div className={styles.blockBlur__opportunities}></div>

				<Distribution />

				<Data />
				<Notification />
			</div>
		</div>
	)
}

export default Opportunities
