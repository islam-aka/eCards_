import React from 'react'
import styles from './Cards.module.scss'
import iconInfinitely from '../../../assets/svg/infinitely.svg'
import imgCardOne from '../../../assets/cards/cardOne.png'
import imgCardTwo from '../../../assets/cards/cardTwo.png'
import imgCardThree from '../../../assets/cards/cardThree.png'

import { useInView } from 'react-intersection-observer'

const Cards = () => {
	const [ref, inView] = useInView({ threshold: 0 })

	return (
		<div ref={ref} className={styles.cards}>
			<div className={styles.blockBlur__cards}></div>

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
					<p>Выпуск карт </p>
					<h2>Безлимитный моментальный выпуск виртуальных карт</h2>
					<p>
						На платформе доступны карты VISA, MasterCard, UnionPay. Бины
						постоянно пополняются. Для выпуска карт массовым запросом необходимо
						всего несколько кликов. Ограничений на выпуск карт нет
					</p>
				</div>
			</div>
		</div>
	)
}

export default Cards
