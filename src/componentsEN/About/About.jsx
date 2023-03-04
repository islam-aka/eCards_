import React, { useContext, useEffect, useRef } from 'react'
import styles from '../../components/About/About.module.scss'
import iconCard from '../../assets/svg/card.svg'
import icon from '../../assets/svg/people.svg'
import iconDollar from '../../assets/svg/dollar-circle.svg'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'
import { Context } from '../..'

const About = () => {
	const { t } = useTranslation()
	const { store } = useContext(Context)
	const [ref, inView] = useInView({ threshold: 0.5 })

	function test() {
		const scrollPosition = window.scrollY
		const section1 = document.getElementById('sectionEN1')
		const section2 = document.getElementById('sectionEN2')
		if (
			scrollPosition >= section1.offsetTop - 150 &&
			scrollPosition < section2.offsetTop - 200
		) {
			store.setLink(1)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', test)
		return () => window.removeEventListener('scroll', test)
	}, [])

	return (
		<>
			<div className={styles.container} id='sectionEN1'>
				<div className={styles.link} id='sectionEN-1'></div>
				<div className={styles.about__bg}>
					<img src='https://i.ibb.co/Zd7xwPg/about.png' alt='background' />
				</div>
				<div className={styles.about}>
					<div className={styles.about__title}>
						<p className={styles.megaTitle}>About eCards in numbers</p>
						<p className={styles.subTitle}>
							eCards was among the first in the world to introduce an automated
							financial infrastructure for advertising traffic arbitrage
						</p>
					</div>
					<div className={styles.about__numbers}>
						<div className={styles.numbers__one} ref={ref}>
							<img src={iconCard} alt='icon card' />
							{inView && (
								<CountUp
									className={styles.about__title}
									delay={0}
									end={700000}
									duration={1.5}
								/>
							)}
							<p className={styles.about__subTitle}>Virtual cards issued</p>
						</div>
						<div ref={ref} className={styles.numbers__two}>
							<img src={icon} alt='icon' />
							{inView && (
								<CountUp
									className={styles.about__title}
									delay={1}
									end={5000}
									duration={1.5}
								/>
							)}
							<p className={styles.about__subTitle}>
								Buyrs and affiliate teams
							</p>
						</div>
						<div ref={ref} className={styles.numbers__three}>
							<img src={iconDollar} alt='icon dollar' />
							<h3 className={styles.about__title}>
								Over&nbsp; $
								{inView && (
									<CountUp
										className={styles.about__title}
										delay={2}
										end={500}
										duration={1.5}
									/>
								)}
								&nbsp; million
							</h3>
							<p className={styles.about__subTitleThree}>
								turnover of advertising expenses through the service
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
