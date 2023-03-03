import React, { useEffect, useState } from 'react'
import styles from './MainScreen.module.scss'
import iconRight from '../../assets/svg/right.svg'
import iconRightLogIn from '../../assets/svg/rightLogIn.svg'
import iconPlus from '../../assets/svg/plus.svg'
import LogoSocial from '../LogoSocial/LogoSocial'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import 'aos'
import i18n from '../../i18next'

const MainScreen = () => {
	let currentLanguage = i18n.language
	const [check, setCheck] = useState('RU')
	const { t } = useTranslation()
	function checkCookie() {
		const cookies = document.cookie.split(';')
		const myCookie = cookies.find(cookie =>
			cookie.trim().startsWith('language=')
		)
		setCheck(myCookie)
	}
	useEffect(() => {
		checkCookie()
	}, [check])

	return (
		<div className={styles.container}>
			<div className={styles.container__info}>
				<p className={styles.container__title}>{t('mainScreen.title')}</p>
				<p className={styles.container__subTitle}>{t('mainScreen.subTitle')}</p>
				<div className={styles.container__btn}>
					<Link to='invite'>
						<div className={styles.btn__invite}>
							<p>{t('header.nav.invite')}</p>
							<img src={iconRight} alt='icon right' />
						</div>
					</Link>
					<Link to={'/conditions'}>
						<div className={styles.btn__conditions}>
							<p>{t('mainScreen.pricingDetails')}</p>
							<img src={iconRightLogIn} alt='icon right' />
						</div>
					</Link>
				</div>
				<div className={styles.block}>
					<div className={styles.info}>
						<div className={styles.info__icon}>
							<img src={iconPlus} alt='icon plus' />
						</div>
						<div>
							<h4>{t('mainScreen.info.title')}</h4>
							<p>{t('mainScreen.info.subTitle')}</p>
						</div>
					</div>
					<LogoSocial />
				</div>
			</div>

			<div className={styles.container__bg}>
				<div className={styles.blockBlur}>
					<img src='https://i.ibb.co/5Gc5yj9/main-Blur-One.png' alt='blur' />
				</div>
				<div className={styles.blockBlur__two}>
					<img src='https://i.ibb.co/G2q0JbW/main-Blur-Two.png' alt='blur' />
				</div>
				{currentLanguage === 'RU' ? (
					<img
						className={styles.bg}
						src='https://i.ibb.co/gtRrZJ7/RU.png'
						alt='main screen'
					/>
				) : (
					<img
						className={styles.bg}
						src='https://i.ibb.co/JB27td9/EN.png'
						alt='main screen'
					/>
				)}
			</div>
		</div>
	)
}

export default MainScreen
