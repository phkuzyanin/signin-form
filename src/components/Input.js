import React from 'react'

function Input({ label, register, required, name , errors}){
	const styles ={
		wrapper:{
			backgroundColor:'',
			display:'flex',
			flexDirection:'column',
			margin:'5px auto',
			width:'75%',
		},
		input:{
			height:'20px'
		}
	}
	return(
		<div style={styles.wrapper} >
			<label style={{marginBottom:'2px'}} > {name} </label>
			<input {...register(label, { required:"°Поле обязательно к заполнению"})} style={styles.input}/>
		</div>
	)
}

export default Input