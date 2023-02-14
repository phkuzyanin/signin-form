import React from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'
import Button from './Button'
import Input from './Input'



function Form(){
	const {
    	register,  
    	formState: { errors },
   	 	handleSubmit,
	} = useForm()

	const styles ={
    	form:{
      		display:'flex',
      		flexDirection:'column',
      		justifyContent:'center',
      		flexGrow:'0',
      		flexShrink:'1',
      		backgroundColor:'#f7ede2',
      		width:'25vw',
      		minHeight:'60vh',
      		margin:'auto',
      		borderRadius:'15px'
    	},
    	errors:{
    		margin:'0 12.5%',
    		fontSize:'11px',
    		color:'red'
    	}

  }

	const onSubmit = (data) => {
		alert(JSON.stringify(data))
	} 
	return(
	<>	
	    	<form onSubmit ={handleSubmit(onSubmit)} style={styles.form}>
        	  	<Input 
        	  		label='firstName' 
        	  		name='First Name' 
        	  		register={register} 
        	  		required  
        	  	/>
        	  	<div style={styles.errors} >{errors?.firstName && <p>{errors?.firstName?.message || "Error"}</p>}</div>
        	  	<Input 
        	  		label='lastName' 
        	  		name='Last Name' 
        	  		register={register} 
        	  		required 
        	  	/>
        	  	<div style={styles.errors} >{errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>}</div>
        	  	<Input 
        	  	label='gender' 
        	  		name='Gender' 
        	  		register={register} 
        	  		required 
        	  	/>
        	  	<div style={styles.errors} >{errors?.gender && <p>{errors?.gender?.message || "Error"}</p>}</div>
         	 	<Input 
         	 		label='phoneNumber' 
         	 		name='Phone Number' 
         	 		register={register} 
         	 		required 
         	 	/>
         	 	<div style={styles.errors} >{errors?.phoneNumber && <p>{errors?.phoneNumber?.message || "Error"}</p>}</div>
         	 	<Input 
         	 		label='email' 
         	 		name='E-mail' 
         	 		register={register} 
         	 		required 
         	 	/>
         	 	<div style={styles.errors} >{errors?.email && <p>{errors?.email?.message || "Error"}</p>}</div>
         	 	<Input 
         	 		label='password' 
         	 		name='Password' 
         	 		register={register} 
         	 		required 
         	 	/>
         	 	<div style={styles.errors} >{errors?.password && <p>{errors?.password?.message || "Error"}</p>}</div>
         	 	<Input 
         	 		label='confirmPassword' 
         	 		name='Confirm Password' 
         	 		register={register} 
         	 		required 
         	 	/>
         	 	<div style={styles.errors}>{errors?.confirmPassword && <p>{errors?.confirmPassword?.message || "Error"}</p>}</div>
        		<Button type="submit" value="SUBMIT" />
    		</form>
    </>	
	)
}

export default Form