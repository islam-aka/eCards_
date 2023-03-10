import React, { useEffect, useState } from 'react'
import styles from './Notification.module.scss'
import iconNotification from '../../../assets/svg/notification.svg'
import noti1 from '../../../assets/img/Notification1.png'
import noti2 from '../../../assets/img/Notification2.png'
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
			<div className={styles.notification__right}>
				{state && (
					<div className={styles.ani}>
						<div className={styles.notiOne}>
							<img src={noti1} alt='notification system' />
						</div>
						<div className={styles.notiTwo}>
							<img src={noti2} alt='notification system' />
						</div>
					</div>
				)}
			</div>
			<div className={styles.blockBlur__notification}></div>
		</div>
	)
}

export default Notification
