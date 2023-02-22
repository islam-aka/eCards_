import React from 'react'
import styles from './MainScreen.module.scss'
import image from '../../assets/img/Главная.png'
import iconRight from '../../assets/svg/right.svg'
import iconRightLogIn from '../../assets/svg/rightLogIn.svg'
import iconPlus from '../../assets/svg/plus.svg'
import LogoSocial from '../LogoSocial/LogoSocial'
import { Link } from 'react-router-dom'

const MainScreen = () => {
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
					<Link to={'in'}>
						<div className={styles.btn__invite}>
							<p>Получить инвайт</p>
							<img src={iconRight} alt='icon right' />
						</div>
					</Link>
					<div className={styles.btn__conditions}>
						<p>Ознакомиться с условиями </p>
						<img src={iconRightLogIn} alt='icon right' />
					</div>
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
			<div className={styles.blockBlur}></div>
			<div className={styles.blockBlur__two}></div>
			<div className={styles.container__bg}>
				<img src={image} alt='asd' />
			</div>
		</div>
	)
}

export default MainScreen
