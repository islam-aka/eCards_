import React from 'react'
import styles from './ScoreBalance.module.scss'
import icon from '../../../../assets/score/wallet-money.svg'
import { IoIosArrowForward } from 'react-icons/io'
import { BiEuro } from 'react-icons/bi'
import { TbCurrencyDollar } from 'react-icons/tb'
import { BsPlusLg } from 'react-icons/bs'
import Circle from '../../../Circle/Circle'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const ScoreBalance = () => {
	const [refAni, inViewAni] = useInView({ threshold: 0 })
	return (
		<>
			<div className={styles.scoreBalance}>
				<div ref={refAni} className={styles.ani}>
					<Circle inView={inViewAni} className={styles.ani} />
					<div className={styles.statistics}>
						<TbCurrencyDollar color='#1E1E1E' />
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

				<div className={styles.balance}>
					<div>
						<img src={icon} alt='wallet-money' />
						<p>Мой баланс</p>
					</div>
					<IoIosArrowForward
						color='#AFAFAF'
						style={{ transform: 'rotate(-90deg)' }}
					/>
				</div>
				<div className={styles.usdt}>
					<p>USDT</p>
				</div>
				<div className={styles.wire}>
					<p>WIRE</p>
				</div>
				<div className={styles.plus}>
					<BsPlusLg color={'#ffffff'} />
				</div>
				<div className={styles.info}>
					<div className={styles.info__account}>
						<h5>Cчет в eCards:</h5>
						<div className={styles.info__sum}>
							<div>
								<BiEuro color='#1E1E1E' width={'12.77px'} />
								<p>28,394.61</p>
							</div>
							<span>Евро</span>
						</div>
						<div className={styles.info__sum}>
							<div>
								<TbCurrencyDollar color='#1E1E1E' width={' 7.22px'} />
								<p>0.00</p>
							</div>
							<span>Доллары США</span>
						</div>
						<div className={styles.btn}>
							<p>Пополнить баланс</p>
							<IoIosArrowForward color='#748BFF' />
						</div>
					</div>
					<div className={styles.info__amount}>
						<h5>Cумма на картах:</h5>
						<div>
							<div>
								<BiEuro color='#1E1E1E' width={'12.77px'} />
								<p>179,328.93</p>
							</div>
							<span>Евро</span>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.blockBlur}></div>
		</>
	)
}

export default ScoreBalance