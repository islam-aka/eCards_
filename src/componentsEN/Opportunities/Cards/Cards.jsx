import React, { useEffect, useState } from 'react'
import styles from '../../../components/Opportunities/Cards/Cards.module.scss'
import iconInfinitely from '../../../assets/svg/infinitely.svg'
import imgCardOne from '../../../assets/cards/cardOne.png'
import imgCardTwo from '../../../assets/cards/cardTwo.png'
import imgCardThree from '../../../assets/cards/cardThree.png'

const Cards = () => {
	const [state, setState] = useState(false)

	function scroll() {
		const scrollPosition = window.scrollY
		const blockAni = document.getElementById('block-ani-card')

		if (scrollPosition >= blockAni.parentNode.parentNode.offsetTop) {
			setState(true)
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
					<p>Card issue</p>
					<h2>Allocation of cards by buyers and grouping of employees</h2>
					<p>
						Connect an unlimited number of employees to your account, create
						groups of buyers and distribute cards between them
					</p>
				</div>
			</div>
		</div>
	)
}

export default Cards
