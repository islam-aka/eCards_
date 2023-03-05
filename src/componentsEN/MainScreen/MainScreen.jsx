import React, { useEffect, useState } from 'react'
import styles from '../../components/MainScreen/MainScreen.module.scss'
import iconRight from '../../assets/svg/right.svg'
import iconRightLogIn from '../../assets/svg/rightLogIn.svg'
import iconPlus from '../../assets/svg/plus.svg'
import LogoSocial from '../LogoSocial/LogoSocial'
import { Link, useNavigate } from 'react-router-dom'
import 'aos'
import i18n from '../../i18next'

const MainScreen = () => {
	const navigate = useNavigate()
	let currentLanguage = i18n.language
	const [check, setCheck] = useState('RU')
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

	const handleNavClick = async (index, event) => {
		navigate('/en')
		event.preventDefault()
		const element = document.getElementById(`sectionEN-${index}`)
		element.scrollIntoView({ behavior: 'smooth' })
	}
	return (
		<div className={styles.container}>
			<div className={styles.container__info}>
				<p className={styles.container__title}>
					Reliable financial solution for affiliate traffic
				</p>
				<p className={styles.container__subTitle}>
					Unlimited and free issue of 3D Secure cards, good trust from Facebook,
					Google, etc., user-friendly interface and prompt technical support
				</p>
				<div className={styles.container__btn}>
					<Link to='/inviteEN'>
						<div className={styles.btn__invite}>
							<p>Get an invite</p>
							<img src={iconRight} alt='icon right' />
						</div>
					</Link>
					<a href={'/en'} onClick={event => handleNavClick(3, event)}>
						<div className={styles.btn__conditions}>
							<p>Pricing details</p>
							<img src={iconRightLogIn} alt='icon right' />
						</div>
					</a>
				</div>
				<div className={styles.block}>
					<div className={styles.info}>
						<div className={styles.info__icon}>
							<img src={iconPlus} alt='icon plus' />
						</div>
						<div>
							<h4>Services available for payment</h4>
							<p>Other services can be added on individual request </p>
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
