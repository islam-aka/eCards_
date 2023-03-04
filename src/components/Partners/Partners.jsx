import React, { useContext, useEffect } from 'react'
import styles from './Partners.module.scss'
import iconOne from '../../assets/svg/icon-logo 1.svg'
import iconTwo from '../../assets/svg/icon-logo 2.svg'
import iconRight from '../../assets/svg/rightLogIn.svg'
import { Link } from 'react-router-dom'
import { Context } from '../..'
import { useTranslation } from 'react-i18next'

const Partners = () => {
	const { t } = useTranslation()
	const { store } = useContext(Context)
	function test() {
		const scrollPosition = window.scrollY
		const section4 = document.getElementById('section4')
		const section5 = document.getElementById('section5')
		if (
			scrollPosition + 200 >= section4.offsetTop &&
			scrollPosition < section5.offsetTop
		) {
			store.setLink(4)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', test)
		return () => window.removeEventListener('scroll', test)
	}, [])
	return (
		<div id='section4' className={styles.container}>
			<div id='section-4' className={styles.link}></div>
			<div className={styles.partner}>
				<div className={styles.partner__left}>
					<div className={styles.info}>
						<p>О партнерах eCards</p>
						<h2>Наши партнеры</h2>
						<p>
							Получайте еще более выгодные условия при выводе средств с
							партнерок на счет eCards!
						</p>
					</div>

					<div className={styles.btn}>
						<Link to={'invite'}>
							<div className={styles.partner__btnInvite}>
								<p>Получить инвайт</p>
								<img src={iconRight} alt='icon right' />
							</div>
						</Link>
					</div>
				</div>
				<div className={styles.partner__right}>
					<div className={styles.block}>
						<div className={styles.right__image_one}>
							<img src={iconOne} alt='icon' />
						</div>
						<div className={styles.right__image_two}>
							<img src={iconTwo} alt='icon' />
						</div>
						<div className={styles.blockBlur}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partners
