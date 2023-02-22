import React from 'react'
import styles from './UI.module.scss'
import iconRight from '../assets/svg/right.svg'

const BtnInvite = ({ color, ...style }) => {
	console.log(color)
	return (
		<div className={styles.btn__invite} style={{ ...style.style }}>
			<a href='#'>
				<p style={{ color: color }}>Получить инвайт</p>
				<img src={iconRight} alt='icon right' />
			</a>
		</div>
	)
}

export default BtnInvite
