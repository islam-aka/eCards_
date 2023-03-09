import React, { useEffect, useState } from 'react'
import styles from '../../../components/Opportunities/Data/Data.module.scss'
import icon from '../../../assets/data/Vector.svg'
import iconDownload from '../../../assets/svg/download.svg'

const Data = () => {
	const [state, setState] = useState(false)

	function scroll() {
		const scrollPosition = window.scrollY
		const blockAni = document.getElementById('block-ani-data')

		if (scrollPosition >= blockAni.parentNode.parentNode.offsetTop + 700) {
			setState(true)
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', scroll)
		return () => window.removeEventListener('scroll', scroll)
	})
	return (
		<div id='block-ani-data' className={styles.data}>
			<div className={styles.blockBlur__data}></div>
			{state && (
				<div className={styles.data__left}>
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
					<div className={styles.checkeds}>
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
			)}
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
