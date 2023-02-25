import React from 'react'
import styles from './Opportunities.module.scss'
import iconWallet from '../../assets/svg/wallet-money.svg'
import iconInfinitely from '../../assets/svg/infinitely.svg'
import iconProfile from '../../assets/svg/profile-2user.svg'
import iconDownload from '../../assets/svg/download.svg'
import iconNotification from '../../assets/svg/notification.svg'
import imgBalance from '../../assets/img/BalanceBG.png'
import imgCardOne from '../../assets/svg/cardOne.svg'
import imgCardTwo from '../../assets/svg/cardTwo.svg'
import imgCardThree from '../../assets/svg/cardThree.svg'
import icons from '../../assets/svg/$.svg'
import imgGroupOne from '../../assets/img/group1.png'
import imgGroupTwo from '../../assets/img/group2.png'
import imgExport from '../../assets/img/table.png'
import notificationImgOne from '../../assets/img/noti.png'
import notificationImgTwo from '../../assets/img/noti2.png'
import { useInView } from 'react-intersection-observer'
import Circle from '../Circle/Circle'
import CountUp from 'react-countup'

const Opportunities = () => {
	const [ref, inView] = useInView({ threshold: 0.1 })
	const [refAni, inViewAni] = useInView({ threshold: 0.1 })
	const [refImage, inViewImage] = useInView({ threshold: 0.1 })
	const [refNoti, inViewNoti] = useInView({ threshold: 0.1 })
	const [refData, inViewData] = useInView({ threshold: 0.1 })
	return (
		<div className={styles.container}>
			<div id='#opportunities' className={styles.link}></div>
			<div className={styles.container__title}>
				<p>eCards предоставляет</p>
				<h2>Возможности и фичи</h2>
			</div>
			<div className={styles.blockBlur__score}></div>
			<div className={styles.opportunities}>
				<div className={styles.opportunities__score}>
					<div className={styles.score__left}>
						<div className={styles.score__icon}>
							<img src={iconWallet} alt='wallet icon' />
						</div>
						<div className={styles.score__block}>
							<p>Пополнение</p>
							<h2>Пополнение счета eCards различными способами</h2>
							<p>
								Пополняйте свой счет eCards c помощью отправки wire или USDT.
								Затем распределяйте деньги по картам и байрам на свое усмотрение
							</p>
						</div>
					</div>
					<div className={styles.score__right}>
						<div className={styles.img}>
							<img src={imgBalance} alt=' balance' />
						</div>
						<div ref={refAni} className={styles.ani}>
							<Circle inView={inViewAni} className={styles.ani} />

							<div className={styles.statistics}>
								<img src={icons} alt='icon' />
								{inViewAni && (
									<div>
										<CountUp
											className={styles.statistics__title}
											start={0}
											end={98}
										/>
										.
										<CountUp
											className={styles.statistics__title}
											start={0}
											end={879}
										/>
										.
										<CountUp
											className={styles.statistics__title}
											start={0}
											end={87}
										/>
									</div>
								)}
								<p className={styles.about__subTitle}>Весь оборот в USDT</p>
							</div>
						</div>
					</div>
				</div>
				<div ref={ref} className={styles.opportunities__cards}>
					<div className={styles.blockBlur__cards}></div>

					<div className={styles.card__img}>
						{inView && (
							<>
								<div className={styles.card__imgTwo}>
									<img src={imgCardOne} alt='card ' />
								</div>
								<div className={styles.card__imgOne}>
									<img src={imgCardTwo} alt='card ' />
								</div>
								<div className={styles.card__imgThree}>
									<img src={imgCardThree} alt='card ' />
								</div>
							</>
						)}
					</div>

					<div className={styles.card__info}>
						<div className={styles.card__icon}>
							<img src={iconInfinitely} alt='wallet icon' />
						</div>
						<div className={styles.card__block}>
							<p>Выпуск карт</p>
							<h2>Безлимитный моментальный выпуск виртуальных карт</h2>
							<p>
								На платформе доступны карты VISA, MasterCard, UnionPay. Бины
								постоянно пополняются. Для выпуска карт массовым запросом
								необходимо всего несколько кликов. Ограничений на выпуск карт
								нет
							</p>
						</div>
					</div>
				</div>
				<div className={styles.blockBlur__opportunities}></div>
				<div className={styles.distribution}>
					<div className={styles.distribution__info}>
						<div className={styles.distribution__icon}>
							<img src={iconProfile} alt='wallet icon' />
						</div>
						<div className={styles.distribution__block}>
							<p>Распределение и группировка</p>
							<h2>Распределение карт по баерам и группировка сотрудников</h2>
							<p>
								Подключайте неограниченное количество сотрудников к своему
								аккаунту, создавайте группы баеров и распределяйте карты между
								ними
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
