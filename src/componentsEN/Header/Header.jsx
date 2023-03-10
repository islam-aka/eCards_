import React, { useContext, useEffect, useState } from 'react'
import logo from '../../assets/svg/Logo.svg'
import LogoFooter from '../../assets/svg/LogoFooter.svg'
import iconSupport from '../../assets/svg/iconSupport.svg'
import iconRightLogIn from '../../assets/svg/rightLogIn.svg'
import styles from '../../components/Header/Header.module.scss'
import DropDown from '../DropDown/DropDown'
import iconRight from '../../assets/svg/right.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../..'
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
	const { store } = useContext(Context)
	const navigate = useNavigate()
	const [activeButton, setActiveButton] = useState(0)
	const [menu, setMenu] = useState(false)

	const handleNavClick = async (index, event) => {
		setActiveButton(index)
		const element = document.getElementById(`sectionEN-${index}`)
		await setMenu(false)
		await navigate('/en')
		await event.preventDefault()
		await store.setLink(index)
		await element.scrollIntoView({ behavior: 'smooth' })
	}

	const handleScroll = () => {
		const scrollPosition = window.scrollY
		const section1 = document.getElementById('sectionEN-1')
		const section2 = document.getElementById('sectionEN-2')
		const section3 = document.getElementById('sectionEN-3')
		const section4 = document.getElementById('sectionEN-4')
		const section5 = document.getElementById('sectionEN-5')

		switch (scrollPosition) {
			case scrollPosition + 100 >= section1.offsetTop &&
				scrollPosition < section2.offsetTop - 100:
				store.setLink(1)
				setActiveButton(1)
				break
			case scrollPosition + 100 >= section2.offsetTop &&
				scrollPosition < section3.offsetTop - 100:
				store.setLink(2)
				setActiveButton(2)
				break
			case scrollPosition + 100 >= section3.offsetTop &&
				scrollPosition < section4.offsetTop - 100:
				store.setLink(3)
				setActiveButton(3)
				break
			case scrollPosition + 100 >= section4.offsetTop &&
				scrollPosition < section5.offsetTop - 100:
				store.setLink(4)
				setActiveButton(4)
				break
			case scrollPosition + 150 >= section5.offsetTop &&
				scrollPosition <= section5.offsetTop - 200:
				store.setLink(5)
				setActiveButton(5)
				break
		}
	}

	const scrollToTop = str => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		if (str === 'menu') {
			store.setLink(0)
			setMenu(!menu)
		}
	}

	const onMouseEnterNav = i => {
		setActiveButton(store.link)
		store.setLink(i)
	}
	const onMouseLeaveNav = () => {
		store.setLink(activeButton)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [store, store.link, activeButton])

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<Link to={'/en'} onClick={scrollToTop} className={styles.logo}>
					<img src={logo} alt='logo' />
				</Link>
				<nav className={styles.header__nav}>
					<ul>
						<li>
							<a
								onMouseEnter={() => onMouseEnterNav(1)}
								onMouseLeave={onMouseLeaveNav}
								href='/en'
								onClick={event => handleNavClick(1, event)}
								className={activeButton === 1 ? styles.active : styles.noActive}
							>
								About e??ards
							</a>
						</li>
						<li>
							<a
								onMouseEnter={() => onMouseEnterNav(2)}
								onMouseLeave={onMouseLeaveNav}
								href='/en'
								onClick={event => handleNavClick(2, event)}
								className={activeButton === 2 ? styles.active : styles.noActive}
							>
								Features
							</a>
						</li>
						<li>
							<a
								onMouseEnter={() => onMouseEnterNav(3)}
								onMouseLeave={onMouseLeaveNav}
								href='/en'
								onClick={event => handleNavClick(3, event)}
								className={activeButton === 3 ? styles.active : styles.noActive}
							>
								Pricing
							</a>
						</li>
						<li>
							<a
								onMouseEnter={() => onMouseEnterNav(4)}
								onMouseLeave={onMouseLeaveNav}
								href='/en'
								onClick={event => handleNavClick(4, event)}
								className={activeButton === 4 ? styles.active : styles.noActive}
							>
								Partners
							</a>
						</li>
						<li>
							<a
								onMouseEnter={() => onMouseEnterNav(5)}
								onMouseLeave={onMouseLeaveNav}
								href='/en'
								onClick={event => handleNavClick(5, event)}
								className={activeButton === 5 ? styles.active : styles.noActive}
							>
								Contacts
							</a>
						</li>
					</ul>
				</nav>
				<div className={styles.header__btn}>
					<div className={styles.btn__logIn}>
						<a
							href='https://pro.ecards.cab'
							target='_blank'
							rel='noopener noreferrer'
						>
							<p>Sign In</p>
							<img src={iconRightLogIn} alt='icon right' />
						</a>
					</div>
					<Link to='/inviteEN'>
						<div className={styles.btn__invite}>
							<p>Get an invite</p>
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
					<Link
						to={'/en'}
						onClick={() => scrollToTop('menu')}
						className={styles.logo}
					>
						<img src={LogoFooter} alt='logo' />
					</Link>
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
				<div className={styles.block}>
					<div>
						<ul className={styles.navBar}>
							<li>
								<a
									href='/'
									onClick={event => handleNavClick(1, event)}
									className={
										activeButton === 1 ? styles.active : styles.noActive
									}
								>
									About e??ards
								</a>
							</li>
							<li>
								<a
									href='/en'
									onClick={event => handleNavClick(2, event)}
									className={
										activeButton === 2 ? styles.active : styles.noActive
									}
								>
									Features
								</a>
							</li>
							<li>
								<a
									href='/en'
									onClick={event => handleNavClick(3, event)}
									className={
										activeButton === 3 ? styles.active : styles.noActive
									}
								>
									Pricing
								</a>
							</li>
							<li>
								<a
									href='/en'
									onClick={event => handleNavClick(4, event)}
									className={
										activeButton === 4 ? styles.active : styles.noActive
									}
								>
									Partners
								</a>
							</li>
							<li>
								<a
									href='/en'
									onClick={event => handleNavClick(5, event)}
									className={
										activeButton === 5 ? styles.active : styles.noActive
									}
								>
									Contacts
								</a>
							</li>
						</ul>
						<a
							href='https://t.me/ecards_support'
							target='_blank'
							rel='noopener noreferrer'
						>
							<div className={styles.support}>
								<p>Support Service</p>
								<div>
									<img src={iconSupport} alt='icon' />
								</div>
							</div>
						</a>
					</div>
					<div className={styles.btn}>
						<Link to='/inviteEN' onClick={() => setMenu(!menu)}>
							<div className={styles.btn__invite}>
								<p>Get an invite</p>
								<img src={iconRight} alt='icon right' />
							</div>
						</Link>

						<div className={styles.btn__logIn}>
							<a
								href='https://pro.ecards.cab'
								target='_blank'
								rel='noopener noreferrer'
							>
								<p>Sign In</p>
							</a>
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
									fill='#ffffff'
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
					</div>
				</div>
			</div>
		</div>
	)
})

export default Header
