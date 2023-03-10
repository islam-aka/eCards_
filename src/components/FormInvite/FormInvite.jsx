import InputText from '../../UI/Text/InputText'
import InputEmail from '../../UI/Email/InputEmail'
import React, { useEffect, useState } from 'react'
import imgCardOne from '../../assets/img/cardOne.png'
import imgCardTwo from '../../assets/img/cardTwo.png'
import imgCardThree from '../../assets/img/cardThree.png'
import styles from './FormInvite.module.scss'
import Role from '../../UI/Role/Role'
import iconRight from '../../assets/svg/right.svg'
import check from '../../assets/svg/check.svg'
import { Link } from 'react-router-dom'

const FormInvite = () => {
	const [done, setDone] = useState(true)
	const [bool, setBool] = useState(false)
	const [invite, setInvite] = useState({
		name: '',
		email: '',
		telegram: '',
		vertical: '',
		role: '',
		turnover: '',
	})
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	const handleSubmit = () => {
		if (
			invite.name !== '' &&
			invite.email !== '' &&
			invite.telegram !== '' &&
			invite.vertical !== '' &&
			invite.role !== '' &&
			invite.turnover !== '' &&
			invite.name !== undefined &&
			invite.email !== undefined &&
			invite.telegram !== undefined &&
			invite.vertical !== undefined &&
			invite.role !== undefined &&
			invite.turnover !== undefined
		) {
			const formData = new FormData()
			formData.append('entry.1383840126', invite.email)
			formData.append('entry.1245351463', invite.name)
			formData.append('entry.994764012', `@${invite.telegram}`)
			formData.append('entry.1350535204', invite.vertical)
			formData.append('entry.1737398789', invite.turnover)
			formData.append('entry.579265941', invite.role)
			fetch(
				`https://docs.google.com/forms/d/e/1FAIpQLSfNQefzlZJhD5lMaGGlJC5HaufdXbpbOwPsBtweZvimaahJ0Q/formResponse`,
				{
					method: 'POST',
					body: formData,
					mode: 'no-cors',
				}
			)
				.then(response => {
					console.log('Form submitted successfully', response)
				})
				.catch(error => {
					console.error('Error submitting form', error)
				})
			setDone(true)
		}
	}
	const handleChange = event => {
		setInvite({ ...invite, [event.target.name]: event.target.value })
	}
	useEffect(() => {
		window.scrollTo({ top: 0 })
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.container__title}>
				<p>{!done ? 'Шаг 1' : 'Шаг 2'}</p>
				<h2>{!done ? 'Заполните форму заявки' : 'Ожидайте обратной связи'}</h2>
			</div>
			<div className={styles.invite}>
				{!done ? (
					<form className={styles.form}>
						<InputEmail
							type={'email'}
							invite={invite}
							fun={handleChange}
							labels={'Электронная почта*'}
							bool={bool}
							setBool={setBool}
							name={'email'}
						/>
						<InputText
							type={'text'}
							invite={invite}
							fun={handleChange}
							labels={'Имя*'}
							name={'name'}
						/>
						<div className={styles.labs}>
							<span>@</span>
							<InputText
								type={'text'}
								invite={invite}
								fun={handleChange}
								labels={'Телеграм*'}
								name={'telegram'}
							/>
						</div>

						<InputText
							type={'text'}
							invite={invite}
							fun={handleChange}
							labels={'В какой вертикали работаете?*'}
							name={'vertical'}
						/>

						<div className={styles.lab}>
							<span>$</span>
							<InputText
								type={'number'}
								invite={invite}
								fun={handleChange}
								labels={'Примерный оборот в месяц на рекламу*'}
								name={'turnover'}
							/>
						</div>
						<Role value={invite} setValue={setInvite} />
						<div
							onClick={handleSubmit}
							className={
								invite.name !== '' &&
								invite.email !== '' &&
								invite.telegram !== '' &&
								invite.vertical !== '' &&
								invite.role !== '' &&
								invite.turnover !== '' &&
								invite.name !== undefined &&
								invite.email !== undefined &&
								invite.telegram !== undefined &&
								invite.vertical !== undefined &&
								invite.role !== undefined &&
								invite.turnover !== undefined &&
								bool !== false
									? styles.btn__active
									: styles.btn__noActive
							}
						>
							<p>Отправить</p>
							<img src={iconRight} alt='icon right' />
						</div>
					</form>
				) : (
					<div className={styles.check}>
						<div className={styles.check__icon}>
							<img src={check} alt='icon' />
						</div>
						<div className={styles.check__text}>
							<p>Заявка отправлена</p>
							<p>Наша служба поддержки скоро свяжется с вами!</p>
						</div>
						<Link to={'/'} onClick={scrollToTop}>
							<div className={styles.check__btn}>
								<img src={iconRight} alt='' />
								<p>Вернуться на главную</p>
							</div>
						</Link>
					</div>
				)}

				<div className={styles.card__img}>
					<div className={styles.blockBlur}></div>
					<div className={styles.card__imgOne}>
						<img src={imgCardTwo} alt='card ' />
					</div>
					<div className={styles.card__imgTwo}>
						<img src={imgCardOne} alt='card ' />
					</div>
					<div className={styles.card__imgThree}>
						<img src={imgCardThree} alt='card ' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormInvite
