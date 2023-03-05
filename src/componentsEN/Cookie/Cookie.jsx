import React, { useState } from 'react'
import styles from './Cookie.module.scss'
import cookieImg from '../../assets/img/cookieImg.png'
import cookieIcon from '../../assets/svg/iconCookie.svg'

const Cookie = () => {
	const [first, setfirst] = useState(false)
	const check = () => {}
	return (
		<div className={!first ? styles.container : styles.container__none}>
			<div className={styles.cookie}>
				<div className={styles.cookie__left}>
					<div className={styles.cookieImg}>
						<img src={cookieImg} alt='cookie' />
					</div>
					<p>
						Our website use cookies. By continuing navigating, we assume your
						permission to deploy cookies as detailed in our Privacy Policy.
					</p>
					<span>By using our website you agree to our Cookie Policy</span>
				</div>
				<div className={styles.cookie__right}>
					<div onClick={() => setfirst(true)} className={styles.accept}>
						<img src={cookieIcon} alt='icon cookie' />
						<p>Accept cookies</p>
					</div>
					<div className={styles.reject} onClick={() => setfirst(true)}>
						<p>Decline</p>
					</div>
					<div className={styles.close} onClick={() => setfirst(true)}>
						<div className={styles.close__line_top}></div>
						<div className={styles.close__line_bottom}></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Cookie
