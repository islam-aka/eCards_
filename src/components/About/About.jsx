import React from 'react'
import styles from './About.module.scss'
import iconCard from '../../assets/svg/card.svg'
import icon from '../../assets/svg/people.svg'
import iconDollar from '../../assets/svg/dollar-circle.svg'
import image from '../../assets//img/ОeCards.png'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'

const About = () => {
	const { t } = useTranslation()
	const [refOne, inViewOne] = useInView({ threshold: 0.5 })
	const [refTwo, inViewTwo] = useInView({ threshold: 0.5 })
	const [refThree, inViewThree] = useInView({ threshold: 0.5 })

	return (
		<div className={styles.container}>
			<div className={styles.link} id='#eСards'></div>
			<div className={styles.about__bg}>
				<img src={image} alt='background' />
			</div>
			<div className={styles.about}>
				<div className={styles.about__title}>
					<p className={styles.megaTitle}>{t('about.title')}</p>
					<p className={styles.subTitle}>{t('about.subTitle')}</p>
				</div>
				<div className={styles.about__numbers}>
					<div className={styles.numbers__one} ref={refOne}>
						<img src={iconCard} alt='icon card' />
						{inViewOne && (
							<CountUp
								className={styles.about__title}
								delay={0}
								end={700000}
								duration={1.5}
							/>
						)}
						<p className={styles.about__subTitle}>{t('about.block.one')}</p>
					</div>
					<div ref={refTwo} className={styles.numbers__two}>
						<img src={icon} alt='icon' />
						{inViewTwo && (
							<CountUp
								className={styles.about__title}
								delay={1}
								end={5000}
								duration={1.5}
							/>
						)}
						<p className={styles.about__subTitle}>{t('about.block.two')}</p>
					</div>
					<div ref={refThree} className={styles.numbers__three}>
						<img src={iconDollar} alt='icon dollar' />
						<h3 className={styles.about__title}>
							{t('about.block.three.topOne')} &nbsp;
							{inViewThree && (
								<CountUp
									className={styles.about__title}
									delay={2}
									end={500}
									duration={1.5}
								/>
							)}{' '}
							млн.$
						</h3>
						<p className={styles.about__subTitle}>
							Рекламных расходов проведено через сервис
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About
