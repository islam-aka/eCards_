import { useEffect, useState } from 'react'
import styles from './Role.module.scss'
import icon from '../../assets/svg/RightIcon.svg'
import '../../i18next'

const Role = ({ value, setValue }) => {
	const [active, setActive] = useState(true)

	const dropDownActive = () => {
		setActive(!active)
	}

	const handlerChange = str => {
		dropDownActive()
		setValue({ ...value, role: str })
	}

	useEffect(() => {}, [active])

	return (
		<div
			className={!active ? styles.dropdown : styles.dropdown__none}
			tabIndex={6}
		>
			<div className={styles.dropdown__select} onClick={dropDownActive}>
				{active ? (
					<span
						className={
							value.role === ''
								? styles.select__undefined
								: styles.selectUndefined
						}
					>
						Specify your position*
					</span>
				) : (
					<span
						className={value.role === '' ? styles.select__none : styles.select}
					>
						Specify your position*
					</span>
				)}

				<p>{value.role}</p>
				<img
					className={!active ? styles.active : styles.activeNone}
					src={icon}
					alt='icon right'
				/>
			</div>
			<div className={styles.dropdown__list}>
				<div
					onClick={() => handlerChange('Affiliate Program')}
					className={styles.dropdown__list__item}
				>
					<p>Affiliate Program</p>
				</div>
				<div
					onClick={() => handlerChange('Affiliate Team')}
					className={styles.dropdown__list__item}
				>
					<p>Affiliate Team</p>
				</div>
				<div
					onClick={() => handlerChange('Individual Affiliate')}
					className={styles.dropdown__list__item}
				>
					<p>Individual Affiliate</p>
				</div>
			</div>
		</div>
	)
}

export default Role
