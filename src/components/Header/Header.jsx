import React, { useEffect, useState } from 'react'
import logo from '../../assets/svg/Logo.svg'
import LogoFooter from '../../assets/svg/LogoFooter.svg'
import iconSupport from '../../assets/img/iconSupport.png'
import iconRightLogIn from '../../assets/svg/rightLogIn.svg'
import styles from './Header.module.scss'
import DropDown from '../DropDown/DropDown'
import { useTranslation } from 'react-i18next'
import iconRight from '../../assets/svg/right.svg'
import { Link } from 'react-router-dom'

const Header = () => {
	const { t } = useTranslation()
	const [menu, setMenu] = useState(false)
	const [hover, setHover] = useState(false)

	useEffect(() => {}, [menu])

	const onMouseEnter = () => {
		setHover(true)
	}
	const onMouseLeave = () => {
		setHover(false)
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<a href='#' className={styles.logo}>
					<img src={logo} alt='logo' />
				</a>
				<nav className={styles.header__nav}>
					<ul>
						<li>
							<a href='#eСards'>{t('navBar.aboutECards')}</a>
						</li>
						<li>
							<a href='#opportunities'>{t('navBar.opportunities')}</a>
						</li>
						<li>
							<a href='#'>{t('navBar.conditions')}</a>
						</li>
						<li>
							<a href='#'>{t('navBar.partners')}</a>
						</li>
						<li>
							<a href='#'>{t('navBar.contacts')}</a>
						</li>
					</ul>
				</nav>
				<div className={styles.header__btn}>
					<div className={styles.btn__logIn}>
						<a href='#'>
							<p>Войти</p>
							<img src={iconRightLogIn} alt='icon right' />
						</a>
					</div>
					<Link to={'in'}>
						<div className={styles.btn__invite}>
							<p>Получить инвайт</p>
							<img src={iconRight} alt='icon right' />
						</div>
					</Link>
					<DropDown />
					<div
						onClick={() => setMenu(!menu)}
						className={styles.burger__wrapper}
					>
						<div className={styles.burger}>
							<div
								className={
									menu ? styles.line__top_active : styles.line__top_none
								}
							></div>
							<div
								className={
									!menu ? styles.line__middle : styles.line__middle_none
								}
							></div>
							<div
								className={
									menu ? styles.line__bottom_active : styles.line__bottom_none
								}
							></div>
						</div>
					</div>
				</div>
			</div>
			<div className={menu ? styles.menu : styles.menu__none}>
				<div className={styles.menuTop}>
					<a href='#' className={styles.logo}>
						<img src={LogoFooter} alt='logo' />
					</a>
					<div
						onClick={() => setMenu(!menu)}
						className={styles.burger__wrapper}
					>
						<div className={styles.burger}>
							<div
								className={
									menu ? styles.line__top_active : styles.line__top_none
								}
							></div>
							<div
								className={
									!menu ? styles.line__middle : styles.line__middle_none
								}
							></div>
							<div
								className={
									menu ? styles.line__bottom_active : styles.line__bottom_none
								}
							></div>
						</div>
					</div>
				</div>
				<ul className={styles.navBar}>
					<li>
						<a href='#eСards'>{t('navBar.aboutECards')}</a>
					</li>
					<li>
						<a href='#opportunities'>{t('navBar.opportunities')}</a>
					</li>
					<li>
						<a href='#'>{t('navBar.conditions')}</a>
					</li>
					<li>
						<a href='#'>{t('navBar.partners')}</a>
					</li>
					<li>
						<a href='#'>{t('navBar.contacts')}</a>
					</li>
				</ul>
				<a href='#'>
					<div className={styles.support}>
						<p>Служба поддержки</p>
						<div>
							<img src={iconSupport} alt='icon' />
						</div>
					</div>
				</a>
				<div className={styles.btn}>
					<Link to={'in'}>
						<div className={styles.btn__invite}>
							<p>Получить инвайт</p>
							<img src={iconRight} alt='icon' />
						</div>
					</Link>
					<a href='#'>
						<div
							className={styles.btn__logIn}
							onMouseEnter={onMouseEnter}
							onMouseLeave={onMouseLeave}
						>
							<p>Войти</p>
							<svg
								width='8'
								height='12'
								viewBox='0 0 8 12'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M0.910582 0.410582C1.23602 0.0851447 1.76366 0.0851447 2.08909 0.410582L7.08909 5.41058C7.41453 5.73602 7.41453 6.26366 7.08909 6.58909L2.08909 11.5891C1.76366 11.9145 1.23602 11.9145 0.910582 11.5891C0.585145 11.2637 0.585145 10.736 0.910582 10.4106L5.32133 5.99984L0.910582 1.58909C0.585145 1.26366 0.585145 0.736018 0.910582 0.410582Z'
									fill={hover ? '#5d43ff' : '#ffffff'}
								/>
								<defs>
									<linearGradient
										id='paint0_linear_1387_7486'
										x1='2.31996'
										y1='15.0977'
										x2='13.4084'
										y2='8.78755'
										gradientUnits='userSpaceOnUse'
									>
										<stop stopColor='#7AAFFF' />
										<stop offset='1' stopColor='#642DFF' />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Header
