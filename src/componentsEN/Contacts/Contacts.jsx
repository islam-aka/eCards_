import React, { useContext, useEffect, useRef } from 'react'
import styles from '../../components/Contacts/Contacts.module.scss'
import iconOne from '../../assets/img/iconOne.png'
import iconTwo from '../../assets/img/iconTwo.png'
import iconThree from '../../assets/img/iconThree.png'
import icontel from '../../assets/svg/icons.svg'
import { Context } from '../..'

const Contacts = () => {
	const { store } = useContext(Context)
	function test() {
		const scrollPosition = window.scrollY
		const section5 = document.getElementById('sectionEN5')
		if (scrollPosition + 250 >= section5.offsetTop) {
			store.setLink(5)
		}
		console.log(scrollPosition + 250, section5.offsetTop)
	}

	useEffect(() => {
		window.addEventListener('scroll', test)
		return () => window.removeEventListener('scroll', test)
	}, [])

	return (
		<>
			<div id='sectionEN5' className={styles.contact}>
				<div id='sectionEN-5' className={styles.link}></div>
				<div className={styles.contact__left}>
					<p className={styles.contact__subTitle}>Contact</p>

					<h3 className={styles.contact__left_title}>
						If you have questions, contact us!
					</h3>
					<p className={styles.contact__left_time}>
						Our support team is available daily
						<span>from 08:00 to 22:00 UTC +3</span>
					</p>
					<a href='https://t.me/ecards_support' target='_blank'>
						<div className={styles.support}>
							<p>Write to support</p>
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
		</>
	)
}

export default Contacts
