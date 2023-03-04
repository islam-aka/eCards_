import React, { useContext, useEffect, useRef } from 'react'
import styles from './Opportunities.module.scss'
import Score from './Score/Score'
import Cards from './Cards/Cards'
import Distribution from './Distribution/Distribution'
import 'aos'
import Data from './Data/Data'
import Notification from './Notification/Notification'
import { Context } from '../..'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'

const Opportunities = () => {
	const { t } = useTranslation()
	const { store } = useContext(Context)
	const [ref, inView] = useInView({ threshold: 0.5 })

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
	}, [inView])

	return (
		<div id='sectionEN2' className={styles.container}>
			<div className={styles.link} id='sectionEN-2' ref={ref}></div>
			<div className={styles.container__title}>
				<p>eCards provides</p>
				<h2>Features</h2>
			</div>

			<div className={styles.opportunities}>
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
