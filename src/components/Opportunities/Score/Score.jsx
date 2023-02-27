import React from 'react'
import styles from './Score.module.scss'
import iconWallet from '../../../assets/svg/wallet-money.svg'
import imgBalance from '../../../assets/img/BalanceBG.png'
import icons from '../../../assets/svg/$.svg'
import Circle from '../../Circle/Circle'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Score = () => {
	const [refAni, inViewAni] = useInView({ threshold: 0 })

	return (
		<>
			<div className={styles.blockBlur__score}></div>
			<div className={styles.opportunities__score}>
				<div className={styles.score__left}>
					<div className={styles.score__icon}>
						<img src={iconWallet} alt='wallet icon' />
					</div>
					<div className={styles.score__block}>
						<p>Пополнение</p>
						<h2>Пополнение счета eCards различными способами</h2>
						<p>
							Пополняйте свой счет eCards c помощью отправки wire или USDT.
							Затем распределяйте деньги по картам и байрам на свое усмотрение
						</p>
					</div>
				</div>
				<div className={styles.score__right}>
					<div className={styles.img}>
						<img src={imgBalance} alt=' balance' />
					</div>
					<div ref={refAni} className={styles.ani}>
						<Circle inView={inViewAni} className={styles.ani} />

						<div className={styles.statistics}>
							<img src={icons} alt='icon' />
							{inViewAni && (
								<div>
									<CountUp
										className={styles.statistics__title}
										start={0}
										end={98}
										duration={1.2}
									/>
									.
									<CountUp
										className={styles.statistics__title}
										start={0}
										end={879}
										duration={1.2}
									/>
									.
									<CountUp
										className={styles.statistics__title}
										start={0}
										end={87}
										duration={1.2}
									/>
								</div>
							)}
							<p className={styles.about__subTitle}>Весь оборот в USDT</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Score
