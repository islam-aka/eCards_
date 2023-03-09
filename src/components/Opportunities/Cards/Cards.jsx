import React, { useEffect, useState } from 'react'
import styles from './Cards.module.scss'
import iconInfinitely from '../../../assets/svg/infinitely.svg'
import imgCardOne from '../../../assets/cards/cardOne.png'
import imgCardTwo from '../../../assets/cards/cardTwo.png'
import imgCardThree from '../../../assets/cards/cardThree.png'
import useWindowWidth from '../../../hooks/hooksWidth'

const Cards = () => {
	const [state, setState] = useState(false)
	let WindowWidth = useWindowWidth()
	function scroll() {
		const scrollPosition = window.scrollY
		const blockAni = document.getElementById('block-ani-card')

		if (WindowWidth >= 570) {
			if (scrollPosition >= blockAni.parentNode.parentNode.offsetTop) {
				setState(true)
			}
		} else {
			if (scrollPosition >= blockAni.parentNode.parentNode.offsetTop + 250) {
				setState(true)
			}
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', scroll)
		return () => window.removeEventListener('scroll', scroll)
	})
	return (
		<div id='block-ani-card' className={styles.cards}>
			<div className={styles.card__img}>
				{state && (
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
					<p>Выпуск карт</p>
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
