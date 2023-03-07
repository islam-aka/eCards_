import { useState } from 'react'
import styles from '../../components/DropDown/DropDown.module.scss'
import iconBottom from '../../assets/svg/rightBlue.svg'
import { useNavigate } from 'react-router-dom'

const DropDown = () => {
	const [active, setActive] = useState(true)
	const navigate = useNavigate()
	const currentPath = window.location.pathname

	const dropDownActive = () => {
		setActive(!active)
	}

	const check = () => {
		if (currentPath === '/inviteEN') {
			navigate('/invite')
			localStorage.setItem('locales', 'ru')
		} else {
			navigate('/')
		}
	}

	return (
		<div className={!active ? styles.dropdown : styles.dropdown__none}>
			<div className={styles.dropdown__select} onClick={dropDownActive}>
				<span className={styles.select}>EN</span>
				<img
					className={!active ? styles.active : styles.activeNone}
					src={iconBottom}
					alt='icon right'
				/>
			</div>
			<div className={styles.dropdown__list}>
				<div onClick={() => check()} className={styles.dropdown__list__item}>
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
