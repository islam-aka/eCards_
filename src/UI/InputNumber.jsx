import { TextField } from '@mui/material'
import React from 'react'
import styles from './InputNumber.module.scss'

const InputNumber = ({ invite, fun, name, labels, type }) => {
	return (
		<TextField
			className={invite[name] !== '' ? styles.inp : styles.inpEmpty}
			id='demo-helper-text-aligned-no-helper'
			type={type}
			label={labels}
			value={invite[name]}
			name={name}
			onChange={e => fun(e)}
		/>
	)
}

export default InputNumber
