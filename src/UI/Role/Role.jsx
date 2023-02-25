import { useEffect, useState } from 'react'
import styles from './Role.module.scss'
import icon from '../../assets/svg/RightIcon.svg'
import { useTranslation } from 'react-i18next'
import '../../i18next'

const Role = ({ value, setValue }) => {
	const { i18n } = useTranslation()
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
						*Выберите роль
					</span>
				) : (
					<span
						className={value.role === '' ? styles.select__none : styles.select}
					>
						*Выберите роль
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
					onClick={() => handlerChange('ПП')}
					className={styles.dropdown__list__item}
				>
					<p>ПП</p>
				</div>
				<div
					onClick={() => handlerChange('Арбитражная команда')}
					className={styles.dropdown__list__item}
				>
					<p>Арбитражная команда</p>
				</div>
				<div
					onClick={() => handlerChange('Соло-арбитражник')}
					className={styles.dropdown__list__item}
				>
					<p>Соло-арбитражник</p>
				</div>
			</div>
		</div>
	)
}

export default Role
