import React, { useContext, useEffect, useRef } from 'react'
import styles from './Contacts.module.scss'
import iconOne from '../../assets/img/iconOne.png'
import iconTwo from '../../assets/img/iconTwo.png'
import iconThree from '../../assets/img/iconThree.png'
import icontel from '../../assets/svg/icons.svg'
import { Context } from '../..'
const Contacts = () => {
	const { store } = useContext(Context)
	function test() {
		const scrollPosition = window.scrollY
		const section5 = document.getElementById('section5')
		if (scrollPosition + 250 >= section5.offsetTop) {
			store.setLink(5)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', test)
		return () => window.removeEventListener('scroll', test)
	}, [])

	return (
		<div>
			<div id='section-5' className={styles.link}></div>
			<div id='section5' className={styles.contact}>
				<div className={styles.contact__left}>
					<p className={styles.contact__subTitle}>Контакты</p>
					<h3 className={styles.contact__left_titleRu}>
						Если у вас остались вопросы, напишите нам!
					</h3>

					<p className={styles.contact__left_time}>
						Наша служба поддержки работает ежедневно
						<span>с 08:00 до 22:00 по UTC +3.</span>
					</p>
					<a href='https://t.me/ecards_support' target='_blank'>
						<div className={styles.support}>
							<p>Написать в поддержку</p>
							<img src={icontel} alt='icon' />
						</div>
					</a>
				</div>
				<div className={styles.contact__right}>
					<div className={styles.iconOne}>
						<img src={iconOne} alt='icon' />
					</div>
					<div className={styles.iconThree}>
						<img src={iconTwo} alt='icon' />
					</div>
					<div className={styles.iconTwo}>
						<img src={iconThree} alt='icon' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
