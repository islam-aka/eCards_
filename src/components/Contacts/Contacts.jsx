import React from 'react'
import styles from './Contacts.module.scss'
import iconOne from '../../assets/img/iconOne.png'
import iconTwo from '../../assets/img/iconTwo.png'
import iconThree from '../../assets/img/iconThree.png'
import icontel from '../../assets/svg/icons.svg'
import { useTranslation } from 'react-i18next'

const Contacts = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.contact}>
			<div id='section-5' className={styles.link}></div>
			<div className={styles.contact__left}>
				<p className={styles.contact__subTitle}>{t("contacts.subTitle")}</p>
				<h3 className={styles.contact__left_title}>{t("contacts.title")}</h3>
				<p className={styles.contact__left_time}>
					{t("contacts.desc")}
					<span>{t("contacts.time")}</span>
				</p>
				<a href='https://t.me/ecards_support' target='_blank'>
					<div className={styles.support}>
						<p>{t("contacts.btn")}</p>
						<img src={icontel} alt='icon' />
					</div>
				</a>
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
