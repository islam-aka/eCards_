import React from 'react'
import styles from './Cards.module.scss'
import iconInfinitely from '../../../assets/svg/infinitely.svg'
import imgCardOne from '../../../assets/cards/cardOne.png'
import imgCardTwo from '../../../assets/cards/cardTwo.png'
import imgCardThree from '../../../assets/cards/cardThree.png'
import blockBlur from '../../../assets/cards/blockBlur.png'

import { useInView } from 'react-intersection-observer'
import { useTranslation } from 'react-i18next'

const Cards = () => {
	const [ref, inView] = useInView({ threshold: 0 })
	const { t } = useTranslation()
	return (
		<div ref={ref} className={styles.cards}>
			<div className={styles.blockBlur__cards}>
				<img src={blockBlur} alt='' />
			</div>

			<div className={styles.card__img}>
				{inView && (
					<>
						<div className={styles.card__imgOne}>
							<img src={imgCardTwo} alt='card ' />
						</div>
						<div className={styles.card__imgTwo}>
							<img src={imgCardOne} alt='card ' />
						</div>

						<div className={styles.card__imgThree}>
							<img src={imgCardThree} alt='card ' />
						</div>
					</>
				)}
			</div>

			<div className={styles.card__info}>
				<div className={styles.card__icon}>
					<img src={iconInfinitely} alt='wallet icon' />
				</div>
				<div className={styles.card__block}>
					<p>{t("features.content.cards.subTitle")}</p>
					<h2>{t("features.content.cards.title")}</h2>
					<p>{t("features.content.cards.desc")}</p>
				</div>
			</div>
		</div>
	)
}

export default Cards
