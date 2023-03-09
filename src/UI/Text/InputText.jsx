import { TextField } from '@mui/material'
import React from 'react'
import styles from './Input.module.scss'

const Input = ({ invite, fun, name, labels, type, lab }) => {
	let bool
	const indices = []
	if (invite.email) {
		let i = -1

		while ((i = invite.email.indexOf('@', i + 1)) !== -1) {
			indices.push(i)
		}
		if (indices.length > 1 || indices.length < 1) {
			bool = true
		}
	}
	return (
		<div className={lab !== '$' ? styles.lab : styles.labs}>
			<span>{lab}</span>
			<TextField
				className={invite[name] !== '' ? styles.inp : styles.inpEmpty}
				id='demo-helper-text-aligned-no-helper'
				type={type}
				label={labels}
				value={invite[name]}
				name={name}
				onChange={e => fun(e)}
			/>
		</div>
	)
}

export default Input
