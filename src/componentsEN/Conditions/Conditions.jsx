import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Context } from '../..'
import iconRight from '../../assets/svg/right.svg'
import styles from '../../components/Conditions/Conditions.module.scss'

const Conditions = () => {
	const { store } = useContext(Context)

	function test() {
		const scrollPosition = window.scrollY
		const section3 = document.getElementById('sectionEN3')
		const section4 = document.getElementById('sectionEN4')
		if (
			scrollPosition + 200 >= section3.offsetTop &&
			scrollPosition < section4.offsetTop
		) {
			store.setLink(3)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', test)
		return () => window.removeEventListener('scroll', test)
	}, [])

	const { t } = useTranslation()

	return (
		<div id='sectionEN3' className={styles.container}>
			<div id='sectionEN-3' className={styles.link}></div>
			<div className={styles.conditions__top}>
				<p className={styles.top__subTitle}>Favorable service conditions</p>
				<p className={styles.top__title}>
					Pay only for topping up your eCards account. We have no hidden fees
				</p>
			</div>
			<div className={styles.conditions__middle}>
				<div className={styles.middle}>
					<div className={styles.text}>
						<p className={styles.left__text}>Card issue</p>
						<p className={styles.right__text}>Free</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>Monthly maintenance</p>
						<p className={styles.right__text}>Free</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>Transactions</p>
						<p className={styles.right__text}>Free</p>
					</div>

					<div className={styles.text}>
						<p className={styles.left__text}>Refunds to your eCards account</p>
						<p className={styles.right__text}>Free</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>
							Topping up a card from an eCards account
						</p>
						<p className={styles.right__text}>Free</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>Topping up eCards - USDT</p>
						<p className={styles.right__text}>4,5%</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>Topping up eCards - Wire</p>
						<p className={styles.right__text}>4,5%</p>
					</div>
					<div className={styles.text_bottom}>
						<p className={styles.bottom__text_left}>
							The minimum amount to deposit into an eCards account
						</p>
						<p className={styles.bottom__text_right}>No limits</p>
					</div>
				</div>
			</div>
			<div className={styles.conditions__bottom}>
				<span>
					For big affiliate teams with a turnover of more than &nbsp;
					<span>$100,000</span> per month, it is possible to provide individual
					conditions
				</span>
				<div className={styles.btn__inviteEN}>
					<Link to={'/inviteEN'}>
						<p>Get an invite</p>
						<img src={iconRight} alt='icon right' />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Conditions
