import React from 'react'
import styles from './Distribution.module.scss'
import iconProfile from '../../../assets/svg/profile-2user.svg'
import imgGroupOne from '../../../assets/img/group1.png'
import imgGroupTwo from '../../../assets/img/group2.png'
import { useInView } from 'react-intersection-observer'

const Distribution = () => {
	const [refImage, inViewImage] = useInView({ threshold: 0 })

	return (
		<div className={styles.distribution}>
			<div className={styles.distribution__info}>
				<div className={styles.distribution__icon}>
					<img src={iconProfile} alt='wallet icon' />
				</div>
				<div className={styles.distribution__block}>
					<p>Распределение и группировка</p>
					<h2>Распределение карт по баерам и группировка сотрудников</h2>
					<p>
						Подключайте неограниченное количество сотрудников к своему аккаунту,
						создавайте группы баеров и распределяйте карты между ними
					</p>
				</div>
			</div>
			<div ref={refImage} className={styles.distribution__image}>
				{inViewImage && (
					<div>
						<div className={styles.imageOne}>
							<img src={imgGroupOne} alt='distribution and grouping' />
						</div>
						<div className={styles.imageTwo}>
							<img src={imgGroupTwo} alt=' distribution and grouping' />
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Distribution
