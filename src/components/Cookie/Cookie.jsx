import React, { useState } from 'react'
import styles from './Cookie.module.scss'
import cookieImg from '../../assets/img/cookieImg.png'
import cookieIcon from '../../assets/svg/iconCookie.svg'

const Cookie = () => {
	const [first, setfirst] = useState(false)

	return (
		<div className={!first ? styles.container : styles.container__none}>
			<div className={styles.cookie}>
				<div className={styles.cookie__left}>
					<div className={styles.cookieImg}>
						<img src={cookieImg} alt='cookie' />
					</div>
					<p>
						Используя данный сайт, вы даете согласие на использование файлов
						cookie и других похожих технологий, помогающих нам сделать его
						удобнее для вас
					</p>
				</div>
				<div onClick={() => setfirst(true)} className={styles.accept}>
					<img src={cookieIcon} alt='icon cookie' />
					<p>Принять куки</p>
				</div>
			</div>
		</div>
	)
}

export default Cookie
