import React, { useEffect } from 'react'
import styles from './Data.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import icon from '../../../assets/data/Vector.svg'
import iconDownload from '../../../assets/svg/download.svg'
import { useTranslation } from 'react-i18next'

const Data = () => {
	const { t } = useTranslation()
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])
	return (
		<div className={styles.data}>
			<div className={styles.blockBlur__data}></div>
			<div className={styles.data__left} data-aos='fade-right'>
				<div className={styles.left__block}>
					<div className={styles.icon}>
						<img src={icon} alt=' icon download' />
					</div>
					<div className={styles.left__info}>
						<h3>{t("features.content.data.left.title")}</h3>
						<p>{t("features.content.data.left.desc")}</p>
					</div>
					<div className={styles.left__btn}>
						<div className={styles.close}>
							<span>{t("features.content.data.left.btn1")}</span>
						</div>
						<div className={styles.export}>
							<span>{t("features.content.data.left.btn2")}</span>
						</div>
					</div>
				</div>
				<div
					data-aos='fade-zoom-in'
					data-aos-easing='ease-in-back'
					data-aos-delay='300'
					data-aos-offset='0'
					className={styles.checkeds}
				>
					<div className={styles.checked__one}>
						<span className={styles.checked}></span>
						<p>{t("features.content.data.left.csv")}</p>
					</div>
					<div className={styles.checked__two}>
						<span className={styles.checked}></span>
						<p>{t("features.content.data.left.excel")}</p>
					</div>
				</div>
			</div>
			<div className={styles.data__right}>
				<div className={styles.data__icon}>
					<img src={iconDownload} alt='icon download' />
				</div>
				<div className={styles.data__block}>
					<p>{t("features.content.data.right.subTitle")}</p>
					<h2>{t("features.content.data.right.title")}</h2>
					<p>{t("features.content.data.right.desc")}</p>
				</div>
			</div>
		</div>
	)
}

export default Data
