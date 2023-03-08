import React, { useContext, useEffect, useState } from 'react'
import styles from '../../components/About/About.module.scss'
import iconCard from '../../assets/svg/card.svg'
import icon from '../../assets/svg/people.svg'
import iconDollar from '../../assets/svg/dollar-circle.svg'
import CountUp from 'react-countup'
import { Context } from '../..'

const About = () => {
	const { store } = useContext(Context)
	const [state, setState] = useState(false)

	function scroll() {
		const scrollPosition = window.scrollY
		const blockAni = document.getElementById('block-aniEN')
		const section1 = document.getElementById('sectionEN1')
		const section2 = document.getElementById('sectionEN2')

		if (
			scrollPosition >= section1.offsetTop - 150 &&
			scrollPosition < section2.offsetTop - 200
		) {
			store.setLink(1)
		}
		if (
			scrollPosition >= blockAni.offsetTop &&
			scrollPosition <=
				blockAni.offsetTop + blockAni.offsetHeight + window.innerHeight
		) {
			setState(true)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', scroll)
		return () => window.removeEventListener('scroll', scroll)
	})

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
					<div className={styles.about__numbers} id='block-aniEN'>
						<div className={styles.numbers__one}>
							<img src={iconCard} alt='icon card' />
							{state ? (
								<CountUp
									className={styles.about__title}
									delay={0.25}
									end={843722}
									duration={1.5}
								/>
							) : (
								<span className={styles.about__title}>0</span>
							)}
							<p className={styles.about__subTitle}>Virtual cards issued</p>
						</div>
						<div className={styles.numbers__two}>
							<img src={icon} alt='icon' />
							{state ? (
								<CountUp
									className={styles.about__title}
									delay={0.6}
									end={5776}
									duration={1.5}
								/>
							) : (
								<span className={styles.about__title}>0</span>
							)}
							<p className={styles.about__subTitle}>
								Buyers and <br /> affiliate teams
							</p>
						</div>
						<div className={styles.numbers__three}>
							<img src={iconDollar} alt='icon dollar' />
							<h3 className={styles.about__title}>
								Over&nbsp;$
								{state ? (
									<CountUp
										className={styles.about__title}
										delay={1}
										end={500}
										duration={1.5}
									/>
								) : (
									<span className={styles.about__title}>0</span>
								)}
								&nbsp;millions
							</h3>
							<p className={styles.about__subTitleThree}>
								Turnover of advertising expenses through the service
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
