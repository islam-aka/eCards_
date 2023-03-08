import React, { useEffect } from 'react'
import styles from '../../../components/Opportunities/Notification/Notification.module.scss'
import iconNotification from '../../../assets/svg/notification.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Notification = () => {
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<div className={styles.notification}>
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
			<div
				className={styles.notification__right}
				data-aos='fade-left'
				data-aos-duration='1000'
			>
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
			<div className={styles.blockBlur__notification}></div>
		</div>
	)
}

export default Notification
