import React, { useEffect } from 'react'
import styles from './Distribution.module.scss'
import iconProfile from '../../../assets/svg/profile-2user.svg'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdPersonOutline } from 'react-icons/md'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'

const Distribution = () => {
	const { t } = useTranslation()
	useEffect(() => {
		AOS.init()
		AOS.refresh()
	}, [])

	return (
		<div className={styles.distribution}>
			<div className={styles.distribution__left}>
				<div className={styles.distribution__icon}>
					<img src={iconProfile} alt='wallet icon' />
				</div>
				<div className={styles.distribution__info}>
					<p>{t("features.content.distribution.left.subTitle")}</p>
					<h2>{t("features.content.distribution.left.title")}</h2>
					<p>{t("features.content.distribution.left.desc")}</p>
				</div>
			</div>
			<div data-aos='fade-left' className={styles.distribution__right}>
				<div className={styles.ani}>
					<div className={styles.block__one}>
						<div className={styles.block__title}>
							<p>{t("features.content.distribution.right.employees")}</p>
							<p>{t("features.content.distribution.right.viewAll")}</p>
						</div>
						<h3>27</h3>
						<div className={styles.block__group}>
							<div className={styles.block__group_left}></div>
							<div className={styles.block__group_right}>
								<p className={styles.block__group_title}>{t("features.content.distribution.right.group2")}</p>

								<div className={styles.block__user}>
									<div className={styles.block__item_one}>
										<p>Л</p>
									</div>
									<div className={styles.block__item}>
										<MdPersonOutline color='#ACB9FF' />
									</div>
									<div className={styles.block__item}>
										<p>A</p>
									</div>
									<div className={styles.block__item}>
										<p>L</p>
									</div>
									<div className={styles.block__item}>
										<MdPersonOutline color='#ACB9FF' />
									</div>
									<div className={styles.block__item}>
										<MdPersonOutline color='#ACB9FF' />
									</div>
									<div className={styles.block__item}>
										<MdPersonOutline color='#ACB9FF' />
									</div>
									<div className={styles.block__item}>
										<MdPersonOutline color='#ACB9FF' />
									</div>
									<div className={styles.block__item}>
										<MdPersonOutline color='#ACB9FF' />
									</div>
									<div className={styles.block__item_number}>
										<h4>+4</h4>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.btn}>
							<AiOutlinePlus color='#748BFF' />
							<p>{t("features.content.distribution.right.invite")}</p>
						</div>
					</div>

					<div
						data-aos='fade-zoom-in'
						data-aos-easing='ease-in-back'
						data-aos-delay='300'
						data-aos-offset='0'
						className={styles.block__two}
					>
						<h3>{t("features.content.distribution.right.group1")}</h3>
						<div className={styles.block__user}>
							<div className={styles.block__item_one}>
								<MdPersonOutline color='#ACB9FF' />
							</div>
							<div className={styles.block__item}>
								<p>Л</p>
							</div>
							<div className={styles.block__item}>
								<MdPersonOutline color='#ACB9FF' />
							</div>
							<div className={styles.block__item}>
								<p>A</p>
							</div>
							<div className={styles.block__item}>
								<MdPersonOutline color='#ACB9FF' />
							</div>
							<div className={styles.block__item}>
								<p>L</p>
							</div>
							<div className={styles.block__item}>
								<MdPersonOutline color='#ACB9FF' />
							</div>
							<div className={styles.block__item_number}>
								<h4>+10</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Distribution
