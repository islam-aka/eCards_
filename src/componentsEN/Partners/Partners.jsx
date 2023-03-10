import React, { useContext, useEffect } from 'react'
import styles from '../../components/Partners/Partners.module.scss'
import iconOne from '../../assets/svg/icon-logo 1.svg'
import iconTwo from '../../assets/svg/icon-logo 2.svg'
import iconRight from '../../assets/svg/rightLogIn.svg'
import { Link } from 'react-router-dom'
import { Context } from '../..'

const Partners = () => {
	const { store } = useContext(Context)
	function test() {
		const scrollPosition = window.scrollY
		const section4 = document.getElementById('sectionEN4')
		const section5 = document.getElementById('sectionEN5')
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
	})
	return (
		<div id='sectionEN4' className={styles.container}>
			<div id='sectionEN-4' className={styles.link}></div>
			<div className={styles.partner}>
				<div className={styles.partner__left}>
					<div className={styles.info}>
						<p>About eCards Partners</p>
						<h2>Our Partners</h2>
						<p>
							Get even better terms when you withdraw funds from affiliates to
							your eCards account!
						</p>
					</div>

					<div className={styles.btn}>
						<Link to={'/inviteEN'}>
							<div className={styles.partner__btnInvite}>
								<p>Get an Invite</p>
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
