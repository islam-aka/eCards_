import { TextField } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import React from 'react'
import styles from './InputNumber.module.scss'

const InputNumber = ({ invite, fun, name, labels, elem, type }) => {
	return (
		<TextField
			className={invite[name] !== '' ? styles.inp : styles.inpEmpty}
			id='outlined-start-adornment'
			type={type}
			sx={{ m: 1, width: '25ch' }}
			label={labels}
			value={invite[name]}
			name={name}
			onChange={e => fun(e)}
			InputProps={{
				startAdornment: (
					<InputAdornment position='start'>{elem}</InputAdornment>
				),
			}}
		/>
	)
}

export default InputNumber
