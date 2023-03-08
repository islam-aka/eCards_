import React, { useContext, useEffect, useState } from 'react'
import styles from './About.module.scss'
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
		const blockAni = document.getElementById('block-ani')
		const section1 = document.getElementById('section1')
		const section2 = document.getElementById('section2')

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
			<div className={styles.container} id='section1'>
				<div className={styles.link} id='section-1'></div>
				<div className={styles.about__bg}>
					<img src='https://i.ibb.co/Zd7xwPg/about.png' alt='background' />
				</div>
				<div className={styles.about}>
					<div className={styles.about__title}>
						<p className={styles.megaTitle}>О eCards в цифрах</p>
						<p className={styles.subTitle}>
							eCards одними из первых в мире представили автоматизированную
							финансовую инфраструктуру для арбитража рекламного трафика
						</p>
					</div>
					<div className={styles.about__numbers} id='block-ani'>
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
							<p className={styles.about__subTitle}>
								Выпущенных виртуальных карт
							</p>
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
								Баеров и <br /> арбитражных команд
							</p>
						</div>
						<div className={styles.numbers__three}>
							<img src={iconDollar} alt='icon dollar' />
							<h3 className={styles.about__title}>
								Более&nbsp;
								<span>
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
								</span>
								&nbsp;
								<span>млн.$</span>
							</h3>
							<p className={styles.about__subTitleThree}>
								Рекламных расходов проведено через сервис
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
