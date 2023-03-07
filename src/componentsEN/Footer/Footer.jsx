import React, { useContext, useState } from 'react'
import styles from '../../components/Footer/Footer.module.scss'
import logo from '../../assets/svg/LogoFooter.svg'
import icons from '../../assets/img/bgFooter.png'
import icon from '../../assets/svg/icon.svg'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../..'

const Footer = () => {
	const { store } = useContext(Context)
	const [menu, setMenu] = useState(false)
	const navigate = useNavigate()

	const handleNavClick = async (index, event) => {
		await setMenu(false)
		await event.preventDefault()
		await store.setLink(index)
		await navigate('/en')
		const element = document.getElementById(`sectionEN-${index}`)
		await element.scrollIntoView({ behavior: 'smooth' })
	}

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<div className={styles.container}>
			<div className={styles.footer}>
				<div className={styles.footer__left}>
					<Link to={'/en'} onClick={scrollToTop} className={styles.logo}>
						<img src={logo} alt='logo' />
					</Link>
					<nav className={styles.footer__nav}>
						<ul>
							<li>
								<a href={'/en'} onClick={event => handleNavClick(1, event)}>
									About eСards
								</a>
							</li>
							<li>
								<a href={'/en'} onClick={event => handleNavClick(2, event)}>
									Features
								</a>
							</li>
							<li>
								<a href={'/en'} onClick={event => handleNavClick(3, event)}>
									Pricing
								</a>
							</li>
							<li>
								<a
									href={'/partners'}
									onClick={event => handleNavClick(4, event)}
								>
									Partners
								</a>
							</li>
							<li>
								<a
									href={'/contact'}
									onClick={event => handleNavClick(5, event)}
								>
									Contacts
								</a>
							</li>
						</ul>
					</nav>
					<div className={styles.footer__info}>
						<img src={icon} alt='icon' />
						<p className={styles.info}>eCards 2023</p>
						<p>Privacy Policy</p>
					</div>
				</div>
				<div className={styles.footer__right}>
					<div className={styles.btn}>
						<h2>Stay tuned for more news</h2>
						<div className={styles.btn__subscribe}>
							<a
								href='https://t.me/joinchat/AAAAAE3STg6obgvsxPakiw'
								target='_blank'
							>
								<p>Follow us</p>
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M1.09992 6.99916C5.39488 4.96698 8.25885 3.62725 9.69185 2.97996C13.7834 1.13181 14.6335 0.810763 15.1877 0.800162C15.3095 0.79783 15.5821 0.830633 15.7586 0.986183C15.9076 1.11753 15.9486 1.29495 15.9683 1.41948C15.9879 1.54401 16.0123 1.82769 15.9929 2.04935C15.7712 4.57933 14.8118 10.7189 14.3237 13.5525C14.1172 14.7515 13.7105 15.1536 13.3169 15.1929C12.4613 15.2784 11.8116 14.5789 10.9829 13.989C9.68624 13.0659 8.9537 12.4912 7.69503 11.5904C6.24043 10.5494 7.18338 9.9773 8.01236 9.04224C8.22931 8.79753 11.999 5.07386 12.0719 4.73606C12.0811 4.69381 12.0895 4.53634 12.0034 4.45318C11.9172 4.37003 11.7901 4.39846 11.6983 4.42108C11.5683 4.45313 9.4968 5.94006 5.48389 8.88185C4.89591 9.32033 4.36333 9.53397 3.88616 9.52277C3.36012 9.51043 2.34822 9.19976 1.59598 8.93421C0.673328 8.60849 -0.0599784 8.43629 0.00387615 7.88313C0.0371355 7.59501 0.402482 7.30035 1.09992 6.99916Z'
									/>
								</svg>
							</a>
						</div>
					</div>
					<h3>
						Support Service&nbsp;
						<a href='https://t.me/ecards_support' target='_blank'>
							<span>@ecards_support</span>
						</a>
					</h3>
				</div>
				<div className={styles.footer__info__mobbile}>
					<div>
						<img src={icon} alt='icon' />
						<p className={styles.info}>eCards 2023</p>
					</div>

					<p>Privacy Policy</p>
				</div>
			</div>
			<div className={styles.footer__bg}>
				<img src={icons} alt='icon' />
			</div>
		</div>
	)
}

export default Footer
