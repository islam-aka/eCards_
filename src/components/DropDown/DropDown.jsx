import { useEffect, useState } from 'react'
import styles from './DropDown.module.scss'
import iconBottom from '../../assets/svg/rightBlue.svg'
import { useTranslation } from 'react-i18next'
import '../../i18next'
import { useNavigate } from 'react-router-dom'

const DropDown = () => {
	const { i18n } = useTranslation()
	const [active, setActive] = useState(true)
	const currentPath = window.location.pathname
	const navigate = useNavigate()
	const dropDownActive = () => {
		setActive(!active)
	}

	const check = () => {
		if (currentPath === '/invite') {
			navigate('/inviteEN')
			localStorage.setItem('locales', 'en')
		} else {
			navigate('/en')
		}
	}

	return (
		<div
			className={!active ? styles.dropdown : styles.dropdown__none}
			tabIndex={6}
		>
			<div className={styles.dropdown__select} onClick={dropDownActive}>
				<span className={styles.select}>RU</span>
				<img
					className={!active ? styles.active : styles.activeNone}
					src={iconBottom}
					alt='icon right'
				/>
			</div>
			<div className={styles.dropdown__list}>
				<div className={styles.dropdown__list__itemActive}>
					<p>RU</p>
				</div>
				<div className={styles.dropdown__list__item} onClick={() => check()}>
					<p>EN</p>
				</div>
			</div>
		</div>
	)
}

export default DropDown
