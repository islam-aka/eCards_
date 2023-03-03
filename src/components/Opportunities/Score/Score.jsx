import React from 'react'
import styles from './Score.module.scss'
import iconWallet from '../../../assets/svg/wallet-money.svg'

import ScoreBalance from './ScoreBalance/ScoreBalance'
import { useTranslation } from 'react-i18next'

const Score = () => {
	const { t } = useTranslation()
	return (
		<>
			<div className={styles.score}>
				<div className={styles.score__left}>
					<div className={styles.score__icon}>
						<img src={iconWallet} alt='wallet icon' />
					</div>

					<div className={styles.score__block}>
						<p>{t('features.content.score.subTitle')}</p>
						<h2>{t('features.content.score.title')}</h2>
						<p>{t('features.content.score.desc')}</p>
					</div>
				</div>
				<div className={styles.score__right}>
					<div className={styles.balance}>{/* <ScoreBalance /> */}</div>
				</div>
			</div>
		</>
	)
}

export default Score
