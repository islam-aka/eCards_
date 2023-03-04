import { useEffect, useState } from 'react'
import styles from './DropDown.module.scss'
import iconBottom from '../../assets/svg/rightBlue.svg'
import { useTranslation } from 'react-i18next'
import '../../i18next'

const DropDown = () => {
	const { i18n } = useTranslation()
	const [language, setLanguage] = useState(undefined)
	const [active, setActive] = useState(true)

	const dropDownActive = () => {
		setActive(!active)
	}

	const changleLanguage = lang => {
		i18n.changeLanguage(lang)
	}

	const check = str => {
		changleLanguage(str)
		if (localStorage.getItem('i18nextLng')) {
			let data = localStorage.getItem('i18nextLng')
			setLanguage(data === '' && data !== 'ru' ? 'RU' : data)
		}
		dropDownActive()
	}
	useEffect(() => {
		check()
	}, [language])

	return (
		<div
			className={!active ? styles.dropdown : styles.dropdown__none}
			tabIndex={6}
		>
			<div className={styles.dropdown__select} onClick={dropDownActive}>
				<span className={styles.select}>{language}</span>
				<img
					className={!active ? styles.active : styles.activeNone}
					src={iconBottom}
					alt='icon right'
				/>
			</div>
			<div className={styles.dropdown__list}>
				{language !== 'RU' ? (
					<div
						onClick={() => check('RU')}
						className={styles.dropdown__list__item}
					>
						<p>RU</p>
					</div>
				) : (
					<div
						className={styles.dropdown__list__itemActive}
						onClick={dropDownActive}
					>
						<p>RU</p>
					</div>
				)}
				{language !== 'EN' ? (
					<div
						onClick={() => check('EN')}
						className={styles.dropdown__list__item}
					>
						<p>EN</p>
					</div>
				) : (
					<div
						className={styles.dropdown__list__itemActive}
						onClick={dropDownActive}
					>
						<p>EN</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default DropDown
