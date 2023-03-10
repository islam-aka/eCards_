import React, { useEffect, useState } from 'react'
import styles from './Data.module.scss'
import icon from '../../../assets/data/Vector.svg'
import iconDownload from '../../../assets/svg/download.svg'
import useWindowWidth from '../../../hooks/hooksWidth'

const Data = () => {
	const [state, setState] = useState(false)
	let WindowWidth = useWindowWidth()

	function scroll() {
		const scrollPosition = window.scrollY
		const blockAni = document.getElementById('block-ani-data')

		if (WindowWidth >= 570) {
			if (scrollPosition >= blockAni.parentNode.parentNode.offsetTop + 600) {
				setState(true)
			}
		} else {
			if (scrollPosition >= blockAni.parentNode.parentNode.offsetTop + 1300) {
				setState(true)
			}
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', scroll)
		return () => window.removeEventListener('scroll', scroll)
	})
	return (
		<div id='block-ani-data' className={styles.data}>
			<div className={styles.blockBlur__data}></div>
			<div className={styles.data__left}>
				{state && (
					<div className={styles.ani}>
						<div className={styles.left__block}>
							<div className={styles.icon}>
								<img src={icon} alt='icon download' />
							</div>
							<div className={styles.left__info}>
								<h3>Экспорт таблицы</h3>
								<p>"Выберите в каком формате экспортировать таблицу</p>
							</div>
							<div className={styles.left__btn}>
								<div className={styles.close}>
									<span>Закрыть</span>
								</div>
								<div className={styles.export}>
									<span>Экспортировать</span>
								</div>
							</div>
						</div>
						<div className={styles.checkeds}>
							<div className={styles.checked__one}>
								<span className={styles.checked}></span>
								<p>В формате СSV</p>
							</div>
							<div className={styles.checked__two}>
								<span className={styles.checked}></span>
								<p>Таблица Excel</p>
							</div>
						</div>
					</div>
				)}
			</div>
			<div className={styles.data__right}>
				<div className={styles.data__icon}>
					<img src={iconDownload} alt='icon download' />
				</div>
				<div className={styles.data__block}>
					<p>Данные</p>
					<h2>Подробная отчетность и выгрузка данных</h2>
					<p>
						Создавайте и выгружайте подробные отчеты по расходам по каждой
						карте, группе карт, сотруднику или группе сотрудников. Для
						формирования отчетов доступны гибкие фильтры, а также выгрузка
						результатов в .CSV и .XLSX
					</p>
				</div>
			</div>
		</div>
	)
}

export default Data
