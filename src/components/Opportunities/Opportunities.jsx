import React, { useContext, useEffect } from 'react'
import styles from './Opportunities.module.scss'
import Score from './Score/Score'
import Cards from './Cards/Cards'
import Distribution from './Distribution/Distribution'
import 'aos'
import Data from './Data/Data'
import Notification from './Notification/Notification'
import { Context } from '../..'
import { useInView } from 'react-intersection-observer'
import blockBlur from '../../assets/cards/blockBlur.png'

const Opportunities = () => {
	const { store } = useContext(Context)
	const [ref, inView] = useInView({ threshold: 0.5 })

	function test() {
		const scrollPosition = window.scrollY
		const section2 = document.getElementById('section2')
		const section3 = document.getElementById('section3')
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
		<div id='section2' className={styles.container}>
			<div className={styles.link} id='section-2' ref={ref}></div>
			<div className={styles.container__title}>
				<p>eCards предоставляет</p>
				<h2>Возможности и фичи</h2>
			</div>
			<div className={styles.blockBlur__cards}>
				<img src={blockBlur} alt='' />
			</div>
			<div className={styles.blockBlur}></div>
			<div className={styles.blockBlur__opportunities}></div>
			<div className={styles.opportunities}>
				<Score />
				<Cards />

				<Distribution />

				<Data />
				<Notification />
			</div>
		</div>
	)
}

export default Opportunities
