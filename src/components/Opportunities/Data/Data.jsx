import React, { useEffect } from 'react'
import styles from './Data.module.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import icon from '../../../assets/data/Vector.svg'
import iconDownload from '../../../assets/svg/download.svg'

const Data = () => {
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
						<h3>Экспорт таблицы</h3>
						<p>Выберите в каком формате экспортировать таблицу</p>
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
				<div
					data-aos='fade-zoom-in'
					data-aos-easing='ease-in-back'
					data-aos-delay='300'
					data-aos-offset='0'
					className={styles.checkeds}
				>
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
