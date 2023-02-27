import React from 'react'
import styles from './Score.module.scss'
import iconWallet from '../../../assets/svg/wallet-money.svg'

import ScoreBalance from './ScoreBalance/ScoreBalance'

const Score = () => {
	return (
		<>
			<div className={styles.score}>
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
					<div className={styles.balance}>
						<ScoreBalance />
					</div>
				</div>
			</div>
		</>
	)
}

export default Score
