import { useEffect, useRef, useState } from 'react'
import styles from '../../components/DropDown/DropDown.module.scss'
import iconBottom from '../../assets/svg/rightBlue.svg'
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
		if (currentPath === '/inviteEN') {
			navigate('/invite')
			localStorage.setItem('locales', 'ru')
		} else {
			localStorage.setItem('locales', 'ru')
			navigate('/')
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
				<span className={styles.select}>EN</span>
				<img
					className={!active ? styles.active : styles.activeNone}
					src={iconBottom}
					alt='icon right'
				/>
			</div>
			<div className={styles.dropdown__list}>
				<div
					onClick={() => checkDropDown()}
					className={styles.dropdown__list__item}
				>
					<p>RU</p>
				</div>
				<div className={styles.dropdown__list__itemActive}>
					<p>EN</p>
				</div>
			</div>
		</div>
	)
}

export default DropDown
