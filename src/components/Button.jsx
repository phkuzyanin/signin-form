import React from 'react'
import { useForm } from 'react-hook-form'

function Button({type, value}){
	const styles={
		width:'75%',
		margin:'10px auto'
	}
	return(
		<input type={type} value={value} style={styles} />
	)
}

export default Button