import React, { useEffect } from 'react'
import styles from '../../../components/Opportunities/Notification/Notification.module.scss'
import iconNotification from '../../../assets/svg/notification.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'
const Notification = () => {
	const { t } = useTranslation()
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
					<h2>Notification setup</h2>
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
						src='https://i.ibb.co/RbxGmM4/noti.png'
						alt='notification system'
					/>
				</div>
				<div className={styles.notiTwo}>
					<img
						src='https://i.ibb.co/vz1YYff/noti2.png'
						alt='notification system'
					/>
				</div>
			</div>
			<div className={styles.blockBlur__notification}></div>
		</div>
	)
}

export default Notification
