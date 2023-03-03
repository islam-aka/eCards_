import React, { useEffect } from 'react'
import styles from './Notification.module.scss'
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
					<p>Настройка нотификаций</p>
					<h2>Система уведомлений</h2>
					<p>
						В личном кабинете вы можете настроить получение всех необходимых
						уведомлений в телеграм: получение 3D Secure code, снижение баланса
						ниже определенных значений, создание и оплата инвойсов, изменение
						лимита карт и т.д.
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
