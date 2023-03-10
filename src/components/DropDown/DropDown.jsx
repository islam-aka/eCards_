import { useEffect, useRef, useState } from 'react'
import styles from './DropDown.module.scss'
import iconBottom from '../../assets/svg/rightBlue.svg'
import '../../i18next'
import { useNavigate } from 'react-router-dom'

const DropDown = () => {
	const [active, setActive] = useState(true)
	const dropdownRef = useRef(null)
	const currentPath = window.location.pathname
	const navigate = useNavigate()

	const dropDownActive = () => {
		setActive(!active)
	}

	const checkDropDown = () => {
		if (currentPath === '/invite') {
			navigate('/inviteEN')
			localStorage.setItem('locales', 'en')
		} else {
			localStorage.setItem('locales', 'en')
			navigate('/en')
		}
	}

	useEffect(() => {
		const handleClickOutside = event => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setActive(true)
			}
		}

		window.addEventListener('scroll', handleClickOutside)

		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [])
	return (
		<div
			ref={dropdownRef}
			className={!active ? styles.dropdown : styles.dropdown__none}
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
				<div
					className={styles.dropdown__list__item}
					onClick={() => checkDropDown()}
				>
					<p>EN</p>
				</div>
			</div>
		</div>
	)
}

export default DropDown
