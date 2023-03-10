import React, { useEffect, useState } from 'react'
import styles from '../../../components/Opportunities/Notification/Notification.module.scss'
import iconNotification from '../../../assets/svg/notification.svg'
import useWindowWidth from '../../../hooks/hooksWidth'

const Notification = () => {
	const [state, setState] = useState(false)
	let WindowWidth = useWindowWidth()

	function scroll() {
		const scrollPosition = window.scrollY
		const blockAni = document.getElementById('block-ani-noti')

		if (WindowWidth >= 560) {
			if (
				scrollPosition >=
				blockAni.parentNode.parentNode.offsetTop * 2 - 300
			) {
				setState(true)
			}
		} else {
			if (
				scrollPosition >=
				blockAni.parentNode.parentNode.offsetTop * 2 + 300
			) {
				setState(true)
			}
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', scroll)
		return () => window.removeEventListener('scroll', scroll)
	})

	return (
		<div id='block-ani-noti' className={styles.notification}>
			<div className={styles.notification__left}>
				<div className={styles.notification__icon}>
					<img src={iconNotification} alt='icon notification' />
				</div>
				<div className={styles.notification__block}>
					<p>Notification setup</p>
					<h2>Notification system</h2>
					<p>
						In your personal account you can set up to receive all the necessary
						notifications in Telegram: receiving 3D Secure code, reducing the
						balance below certain values, creating and paying invoices, changing
						card limits, etc.
					</p>
				</div>
			</div>
			<div className={styles.notification__right}>
				{state && (
					<div className={styles.ani}>
						<div className={styles.notiOne}>
							<img
								src='https://i.ibb.co/Ch5KFbS/notiOne.png'
								alt='notification system'
							/>
						</div>
						<div className={styles.notiTwo}>
							<img
								src='https://i.ibb.co/PDBH00R/noti-Two-EN.png'
								alt='notification system'
							/>
						</div>
					</div>
				)}
			</div>
			<div className={styles.blockBlur__notification}></div>
		</div>
	)
}

export default Notification
