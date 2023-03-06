import React, { useEffect, useState } from 'react'
import styles from './MainScreen.module.scss'
import iconRight from '../../assets/svg/right.svg'
import iconRightLogIn from '../../assets/svg/rightLogIn.svg'
import iconPlus from '../../assets/svg/plus.svg'
import LogoSocial from '../LogoSocial/LogoSocial'
import { Link, useNavigate } from 'react-router-dom'
import 'aos'

const MainScreen = () => {
	const navigate = useNavigate()

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
		navigate('/')
		event.preventDefault()
		const element = document.getElementById(`section-${index}`)
		element.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className={styles.container}>
			<div className={styles.container__info}>
				<p className={styles.container__title}>
					Надежное финансовое решение для арбитража рекламного трафика
				</p>
				<p className={styles.container__subTitle}>
					Безлимитный и бесплатный выпуск 3D Secure карт, хороший траст от
					Facebook, Google и др., удобный интерфейс и оперативная тех.поддержка
				</p>
				<div className={styles.container__btn}>
					<Link to='invite'>
						<div className={styles.btn__invite}>
							<p>Получить инвайт</p>
							<img src={iconRight} alt='icon right' />
						</div>
					</Link>
					<a href={'/'} onClick={event => handleNavClick(3, event)}>
						<div className={styles.btn__conditions}>
							<p>Ознакомиться с условиями</p>
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
							<h4>Доступные для оплаты сервисы</h4>
							<p>
								Возможно добавление других сервисов по индивидуальному запросу
							</p>
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
				<img
					className={styles.bg}
					src='https://i.ibb.co/gtRrZJ7/RU.png'
					alt='main screen'
				/>
			</div>
		</div>
	)
}

export default MainScreen
