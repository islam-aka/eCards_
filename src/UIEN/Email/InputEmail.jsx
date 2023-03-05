import { TextField } from '@mui/material'
import React from 'react'
import styles from './InputEmail.module.scss'

const InputEmail = ({ invite, fun, name, labels, type, bool, setBool }) => {
	if (invite.email) {
		let test = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
		setBool(test.test(invite.email))
	}
	return (
		<>
			{invite.email !== '' ? (
				<TextField
					className={!bool ? styles.inpEmptyUndefined : styles.inpUndefined}
					id='demo-helper-text-aligned-no-helper'
					type={type}
					label={labels}
					value={invite[name]}
					name={name}
					onChange={e => fun(e)}
					error={bool}
				/>
			) : (
				<TextField
					className={bool ? styles.inp : styles.inpEmpty}
					id='demo-helper-text-aligned-no-helper'
					type={type}
					label={labels}
					value={invite[name]}
					name={name}
					onChange={e => fun(e)}
					error={bool}
				/>
			)}
		</>
	)
}

export default InputEmail
