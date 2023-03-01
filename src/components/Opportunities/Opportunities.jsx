import React from 'react'
import styles from './Opportunities.module.scss'
import Score from './Score/Score'
import Cards from './Cards/Cards'
import Distribution from './Distribution/Distribution'
import 'aos'
import Data from './Data/Data'
import Notification from './Notification/Notification'

const Opportunities = () => {
	return (
		<div id='section-2' className={styles.container}>
			<div className={styles.container__title}>
				<p>eCards предоставляет</p>
				<h2>Возможности и фичи</h2>
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
