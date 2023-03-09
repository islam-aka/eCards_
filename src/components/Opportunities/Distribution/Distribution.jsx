import React, { useEffect, useState } from 'react'
import styles from './Distribution.module.scss'
import iconProfile from '../../../assets/svg/profile-2user.svg'
import { AiOutlinePlus } from 'react-icons/ai'
import { MdPersonOutline } from 'react-icons/md'
import useWindowWidth from '../../../hooks/hooksWidth'

const Distribution = () => {
	const [state, setState] = useState(false)
	let WindowWidth = useWindowWidth()

	function scroll() {
		const scrollPosition = window.scrollY
		const blockAni = document.getElementById('block-ani-dist')
		if (WindowWidth >= 570) {
			if (
				scrollPosition >=
				blockAni.parentNode.parentNode.parentNode.offsetTop + 300
			) {
				setState(true)
			}
		} else {
			if (
				scrollPosition >=
				blockAni.parentNode.parentNode.parentNode.offsetTop + 800
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
		<div className={styles.distribution}>
			<div className={styles.distribution__left}>
				<div className={styles.distribution__icon}>
					<img src={iconProfile} alt='wallet icon' />
				</div>
				<div className={styles.distribution__info}>
					<p>Распределение и группировка</p>
					<h2>Распределение карт по баерам и группировка сотрудников</h2>
					<p>
						Подключайте неограниченное количество сотрудников к своему аккаунту,
						создавайте группы баеров и распределяйте карты между ними
					</p>
				</div>
			</div>
			<div id='block-ani-dist' className={styles.distribution__right}>
				{state && (
					<div className={styles.ani}>
						<div className={styles.block__one}>
							<div className={styles.block__title}>
								<p>Сотрудники</p>
								<p>Смотреть все группы</p>
							</div>
							<h3>27</h3>
							<div className={styles.block__group}>
								<div className={styles.block__group_left}></div>
								<div className={styles.block__group_right}>
									<p className={styles.block__group_title}>Группа 2</p>

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
								<p>Пригласить сотрудника</p>
							</div>
						</div>

						<div className={styles.block__two}>
							<h3>Группа 1</h3>
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
				)}
			</div>
		</div>
	)
}

export default Distribution
