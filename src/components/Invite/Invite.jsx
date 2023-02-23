import React from 'react'
import styles from './Invite.module.scss'
import InviteDownload from '../../assets/svg/InviteDownload.svg'
import InviteMessages from '../../assets/svg/InviteMessages.svg'
import InviteUser from '../../assets/svg/InviteUser.svg'
import InviteNotification from '../../assets/svg/InviteNotification.svg'

const Invite = () => {
	return (
		<div className={styles.container}>
			<p className={styles.container__subTitle}>Форма заявки</p>
			<h2 className={styles.container__title}>Как получить инвайт?</h2>
			<div className={styles.container__info}>
				<div className={styles.info__item}>
					<div className={styles.info__icon}>
						<img src={InviteDownload} alt='icon download' />
					</div>
					<p className={styles.info__text}>
						Заполните форму заявки на получение инвайта
					</p>
				</div>
				<div className={styles.info__item}>
					<div className={styles.info__icon}>
						<img src={InviteMessages} alt='icon messages' />
					</div>
					<p className={styles.info__text}>
						Служба поддержки свяжется с вами для проведения небольшого интервью
					</p>
				</div>
				<div className={styles.info__item}>
					<div className={styles.info__icon}>
						<img src={InviteUser} alt='icon user' />
					</div>
					<p className={styles.info__text}>
						Администрация сервиса примет решение по вашей заявке
					</p>
				</div>
				<div className={styles.info__item}>
					<div className={styles.info__icon}>
						<img src={InviteNotification} alt='icon notification' />
					</div>
					<p className={styles.info__text}>
						Инвайт будет отправлен на указанный вами Телеграм
					</p>
				</div>
			</div>
		</div>
	)
}

export default Invite
