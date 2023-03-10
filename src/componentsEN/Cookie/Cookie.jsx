import React, { useState } from 'react'
import styles from '../../components/Cookie/Cookie.module.scss'
import cookieImg from '../../assets/img/cookieImg.png'
import cookieIcon from '../../assets/svg/iconCookie.svg'

const Cookie = () => {
	const [first, setfirst] = useState(false)
	function acceptCookie() {
		setfirst(true)
		localStorage.setItem('locales', 'en')
	}

	return (
		<div className={!first ? styles.container : styles.container__none}>
			<div className={styles.cookie}>
				<div className={styles.cookie__left}>
					<div className={styles.cookieImg}>
						<img src={cookieImg} alt='cookie' />
					</div>
					<p>
						By using this site, you consent to the use of cookies and other
						similar technologies to help us make it more convenient for you
					</p>
				</div>

				<div onClick={() => acceptCookie()} className={styles.accept}>
					<img src={cookieIcon} alt='icon cookie' />
					<p>Accept cookies</p>
				</div>
			</div>
		</div>
	)
}

export default Cookie
