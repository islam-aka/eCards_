import React, { useEffect } from 'react'
import styles from './Partners.module.scss'
import iconOne from '../../assets/svg/icon-logo 1.svg'
import iconTwo from '../../assets/svg/icon-logo 2.svg'
import iconRight from '../../assets/svg/rightLogIn.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Partners = () => {
	const { t } = useTranslation()
	return (
		<div className={styles.container}>
			<div id='section-4' className={styles.link}></div>
			<div className={styles.partner}>
				<div className={styles.partner__left}>
					<div className={styles.info}>
						<p>{t("partners.subTitle")}</p>
						<h2>{t("partners.title")}</h2>
						<p>{t("partners.desc")}</p>
					</div>
					<Link to={'invite'}>
						<div className={styles.partner__btnInvite}>
							<p>{t("partners.btn")}</p>
							<img src={iconRight} alt='icon right' />
						</div>
					</Link>
				</div>
				<div className={styles.partner__right}>
					<div className={styles.block}>
						<div className={styles.right__image_one}>
							<img src={iconOne} alt='icon' />
						</div>
						<div className={styles.right__image_two}>
							<img src={iconTwo} alt='icon' />
						</div>
						<div className={styles.blockBlur}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Partners
