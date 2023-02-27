import React from 'react'
import styles from './Opportunities.module.scss'
import iconDownload from '../../assets/svg/download.svg'
import iconNotification from '../../assets/svg/notification.svg'

import imgExport from '../../assets/img/table.png'
import notificationImgOne from '../../assets/img/noti.png'
import notificationImgTwo from '../../assets/img/noti2.png'
import { useInView } from 'react-intersection-observer'
import Score from './Score/Score'
import Cards from './Cards/Cards'
import Distribution from './Distribution/Distribution'

const Opportunities = () => {
	const [refNoti, inViewNoti] = useInView({ threshold: 0 })
	const [refData, inViewData] = useInView({ threshold: 0 })
	return (
		<div className={styles.container}>
			<div id='#opportunities' className={styles.link}></div>
			<div className={styles.container__title}>
				<p>eCards предоставляет</p>
				<h2>Возможности и фичи</h2>
			</div>

			<div className={styles.opportunities}>
				<Score />
				<Cards />
				<div className={styles.blockBlur__opportunities}></div>
				<Distribution />
				<div className={styles.data}>
					<div className={styles.blockBlur__data}></div>
					<div ref={refData} className={styles.data__left}>
						{inViewData && (
							<>
								<img src={imgExport} alt=' export data' />

								<div className={styles.checked__one}>
									<div className={styles.checked}></div>
									<p>В формате СSV</p>
								</div>
								<div className={styles.checked__two}>
									<div className={styles.checked}></div>
									<p>Таблица Excel</p>
								</div>
							</>
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
				<div className={styles.notification} ref={refNoti}>
					<div className={styles.notification__left}>
						<div className={styles.notification__icon}>
							<img src={iconNotification} alt='icon notification' />
						</div>
						<div className={styles.notification__block}>
							<p>Настройка нотификаций</p>
							<h2>Система уведомлений</h2>
							<p>
								В личном кабинете вы можете настроить получение всех необходимых
								уведомлений в телеграм: получение 3D Secure code, снижение
								баланса ниже определенных значений, создание и оплата инвойсов,
								изменение лимита карт и т.д.
							</p>
						</div>
					</div>
					{inViewNoti && (
						<div className={styles.notification__right}>
							<div className={styles.notiOne}>
								<img src={notificationImgOne} alt='notification system' />
							</div>
							<div className={styles.notiTwo}>
								<img src={notificationImgTwo} alt='notification system' />
							</div>
						</div>
					)}
					<div className={styles.blockBlur__notification}></div>
				</div>
			</div>
		</div>
	)
}

export default Opportunities
