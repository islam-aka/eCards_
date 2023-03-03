import React, { useContext, useEffect, useRef } from 'react'
import styles from './About.module.scss'
import iconCard from '../../assets/svg/card.svg'
import icon from '../../assets/svg/people.svg'
import iconDollar from '../../assets/svg/dollar-circle.svg'
import image from '../../assets//img/ОeCards.png'
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
		const section1 = document.getElementById('section1')
		const section2 = document.getElementById('section2')
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
			<div className={styles.link} id='section-1'></div>
			<div className={styles.container} id='section1'>
				<div className={styles.about__bg}>
					<img src='https://i.ibb.co/Zd7xwPg/about.png' alt='background' />
				</div>
				<div className={styles.about}>
					<div className={styles.about__title}>
						<p className={styles.megaTitle}>{t('about.title')}</p>
						<p className={styles.subTitle}>{t('about.subTitle')}</p>
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
							<p className={styles.about__subTitle}>{t('about.block.one')}</p>
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
							<p className={styles.about__subTitle}>{t('about.block.two')}</p>
						</div>
						<div ref={ref} className={styles.numbers__three}>
							<img src={iconDollar} alt='icon dollar' />
							<h3 className={styles.about__title}>
								{t('about.block.three.topOne')}&nbsp;
								{t('about.block.three.topTwo')}
								{inView && (
									<CountUp
										className={styles.about__title}
										delay={2}
										end={500}
										duration={1.5}
									/>
								)}
								&nbsp;
								{t('about.block.three.topThree')}
							</h3>
							<p className={styles.about__subTitleThree}>
								{t('about.block.three.bottom')}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default About
