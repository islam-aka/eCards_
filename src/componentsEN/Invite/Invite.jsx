import React from 'react'
import styles from '../../components/Invite/Invite.module.scss'
import InviteDownload from '../../assets/svg/InviteDownload.svg'
import InviteMessages from '../../assets/svg/InviteMessages.svg'
import InviteUser from '../../assets/svg/InviteUser.svg'
import InviteNotification from '../../assets/svg/InviteNotification.svg'

const Invite = () => {
	return (
		<div className={styles.container}>
			<div className={styles.container__title}>
				<p>Request Form</p>
				<h2>How to get an Invite?</h2>
			</div>
			<div className={styles.container__info}>
				<div className={styles.info__item}>
					<div className={styles.info__icon}>
						<img src={InviteDownload} alt='icon download' />
					</div>
					<p className={styles.info__text}>Fill out the invitations form</p>
				</div>
				<div className={styles.info__item}>
					<div className={styles.info__icon}>
						<img src={InviteMessages} alt='icon messages' />
					</div>
					<p className={styles.info__text}>
						Support Service will contact you for a short interview{' '}
					</p>
				</div>
				<div className={styles.info__item}>
					<div className={styles.info__icon}>
						<img src={InviteUser} alt='icon user' />
					</div>
					<p className={styles.info__text}>
						The service administration will consider your application{' '}
					</p>
				</div>
				<div className={styles.info__item}>
					<div className={styles.info__icon}>
						<img src={InviteNotification} alt='icon notification' />
					</div>
					<p className={styles.info__text}>
						Invite will be sent to the specified Telegram{' '}
					</p>
				</div>
			</div>
		</div>
	)
}

export default Invite
