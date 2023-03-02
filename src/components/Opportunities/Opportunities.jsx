import React from 'react'
import styles from './Opportunities.module.scss'
import Score from './Score/Score'
import Cards from './Cards/Cards'
import Distribution from './Distribution/Distribution'
import 'aos'
import Data from './Data/Data'
import Notification from './Notification/Notification'
import { useTranslation } from 'react-i18next'

const Opportunities = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.container}>
			<div className={styles.link} id='section-2'></div>
			<div className={styles.container__title}>
				<p>{t("features.subTitle")}</p>
				<h2>{t("features.title")}</h2>
			</div>

			<div className={styles.opportunities}>
				<Score />
				<Cards />
				<div className={styles.blockBlur__opportunities}></div>

				<Distribution />

				<Data />
				<Notification />
			</div>
		</div>
	)
}

export default Opportunities
