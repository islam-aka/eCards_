import React from 'react'
import styles from '../../../components/Opportunities/Score/Score.module.scss'
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
						<p>Top up</p>
						<h2>Top up your eCards account with a variety of methods</h2>
						<p>
							Top up your eCards account by sending wire or USDT. Then
							distribute the money to cards and buyers as you see fit
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
