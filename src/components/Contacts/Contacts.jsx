import React from 'react'
import styles from './Contacts.module.scss'
import iconOne from '../../assets/svg/iconOne.svg'
import iconTwo from '../../assets/svg/iconTwo.svg'
import iconThree from '../../assets/svg/iconThree.svg'
import icontel from '../../assets/svg/tel.svg'

const Contacts = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.contact__left}>
				<p className={styles.contact__subTitle}>Контакты</p>
				<h3 className={styles.contact__left_title}>
					Если у вас остались вопросы, напишите нам!
				</h3>
				<p className={styles.contact__left_time}>
					Наша служба поддержки работает ежедневно
					<span>с 08:00 до 22:00 по UTC +3.</span>
				</p>
				<div className={styles.support}>
					<p>Написать в поддержку</p>
					<img src={icontel} alt='icon' />
				</div>
			</div>
			<div className={styles.contact__right}>
				<div className={styles.iconOne}>
					<img src={iconOne} alt='icon' />
				</div>
				<div className={styles.iconThree}>
					<img src={iconTwo} alt='icon' />
				</div>
				<div className={styles.iconTwo}>
					<img src={iconThree} alt='icon' />
				</div>
			</div>
		</div>
	)
}

export default Contacts
