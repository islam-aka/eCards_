import React, { useEffect, useState } from 'react'
import styles from '../../../components/Opportunities/Notification/Notification.module.scss'
import iconNotification from '../../../assets/svg/notification.svg'

const Notification = () => {
	const [state, setState] = useState(false)

	function scroll() {
		const scrollPosition = window.scrollY
		const blockAni = document.getElementById('block-ani-noti')

		if (
			scrollPosition >=
			blockAni.parentNode.parentNode.offsetTop + blockAni.offsetTop - 700
		) {
			setState(true)
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
			{state && (
				<div className={styles.notification__right}>
					<>
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
					</>
				</div>
			)}
			<div className={styles.blockBlur__notification}></div>
		</div>
	)
}

export default Notification
