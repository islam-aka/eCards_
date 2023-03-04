import React, { useEffect } from 'react'
import styles from '../../../components/Opportunities/Data/Data.module.scss'
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
						<h3>Export table</h3>
						<p>Choose format to export the table</p>
					</div>
					<div className={styles.left__btn}>
						<div className={styles.close}>
							<span>Close</span>
						</div>
						<div className={styles.export}>
							<span>Export</span>
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
						<p>CSV file</p>
					</div>
					<div className={styles.checked__two}>
						<span className={styles.checked}></span>
						<p>Excel</p>
					</div>
				</div>
			</div>
			<div className={styles.data__right}>
				<div className={styles.data__icon}>
					<img src={iconDownload} alt='icon download' />
				</div>
				<div className={styles.data__block}>
					<p>Data</p>
					<h2>Detailed reports and data uploads</h2>
					<p>
						Create and upload detailed expense reports for each card, group of
						cards, employee, or group of employees. Flexible filters are
						available to generate reports, as well as uploading results to .CSV
						and .XLSX
					</p>
				</div>
			</div>
		</div>
	)
}

export default Data
