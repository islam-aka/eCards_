import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Context } from '../..'
import iconRight from '../../assets/svg/right.svg'
import styles from './Conditions.module.scss'

const Conditions = () => {
	const { store } = useContext(Context)

	function test() {
		const scrollPosition = window.scrollY
		const section3 = document.getElementById('section3')
		const section4 = document.getElementById('section4')
		if (
			scrollPosition + 200 >= section3.offsetTop &&
			scrollPosition < section4.offsetTop
		) {
			store.setLink(3)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', test)
		return () => window.removeEventListener('scroll', test)
	}, [])

	const { t } = useTranslation()

	return (
		<div id='section3' className={styles.container}>
			<div id='section-3' className={styles.link}></div>
			<div className={styles.conditions__top}>
				<p className={styles.top__subTitle}>{t('conditions.top.subTitle')}</p>
				<p className={styles.top__title}>{t('conditions.top.title')}</p>
			</div>
			<div className={styles.conditions__middle}>
				<div className={styles.middle}>
					<div className={styles.text}>
						<p className={styles.left__text}>
							{t('conditions.middle.left.text1')}
						</p>
						<p className={styles.right__text}>
							{t('conditions.middle.right.free')}
						</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>
							{t('conditions.middle.left.text2')}
						</p>
						<p className={styles.right__text}>
							{t('conditions.middle.right.free')}
						</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>
							{t('conditions.middle.left.text3')}
						</p>
						<p className={styles.right__text}>
							{t('conditions.middle.right.free')}
						</p>
					</div>

					<div className={styles.text}>
						<p className={styles.left__text}>
							{t('conditions.middle.left.text4')}
						</p>
						<p className={styles.right__text}>
							{t('conditions.middle.right.free')}
						</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>
							{t('conditions.middle.left.text5')}
						</p>
						<p className={styles.right__text}>
							{t('conditions.middle.right.free')}
						</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>
							{t('conditions.middle.left.text6')}
						</p>
						<p className={styles.right__text}>4,5%</p>
					</div>
					<div className={styles.text}>
						<p className={styles.left__text}>
							{t('conditions.middle.left.text7')}
						</p>
						<p className={styles.right__text}>4,5%</p>
					</div>
					<div className={styles.text_bottom}>
						<p className={styles.bottom__text_left}>
							{t('conditions.middle.left.text8')}
						</p>
						<p className={styles.bottom__text_right}>
							{t('conditions.middle.right.noLimits')}
						</p>
					</div>
				</div>
			</div>
			<div className={styles.conditions__bottom}>
				<span>{t('conditions.bottom.desc')}</span>
				<Link to={'invite'}>
					<div className={styles.btn__invite}>
						<p>{t('conditions.bottom.btn')}</p>
						<img src={iconRight} alt='icon right' />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Conditions
