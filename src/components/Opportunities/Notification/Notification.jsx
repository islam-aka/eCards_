import React, { useEffect, useState } from 'react'
import styles from './Notification.module.scss'
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
								src='https://i.ibb.co/2ZmVpXG/Frame-15017.png'
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
