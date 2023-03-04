import React, { useEffect } from 'react'
import styles from '../../../components/Opportunities/Distribution/Distribution.module.scss'
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
					<p>Allocation and grouping</p>
					<h2>Allocation of cards by buyers and grouping of employees</h2>
					<p>
						Connect an unlimited number of employees to your account, create
						groups of buyers and distribute cards between them
					</p>
				</div>
			</div>
			<div data-aos='fade-left' className={styles.distribution__right}>
				<div className={styles.ani}>
					<div className={styles.block__one}>
						<div className={styles.block__title}>
							<p>Employees</p>
							<p>View all groups</p>
						</div>
						<h3>27</h3>
						<div className={styles.block__group}>
							<div className={styles.block__group_left}></div>
							<div className={styles.block__group_right}>
								<p className={styles.block__group_title}>Group 2</p>

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
							<p>Invite an employee</p>
						</div>
					</div>

					<div
						data-aos='fade-zoom-in'
						data-aos-easing='ease-in-back'
						data-aos-delay='300'
						data-aos-offset='0'
						className={styles.block__two}
					>
						<h3>Group 1</h3>
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
