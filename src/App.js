import React from 'react'
import { useForm } from 'react-hook-form'
function App() {
  
  const {
    register,   //метод, который позволяет регистрировать разные поля для формы
    formState:{ errors },
    handleSubmit, //обертка над кастомными хэндлерами
  } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  } // метод onSubmit получает данные из формы с помощью handleSubmit, но орабатывается только, если в форме нет ошибок
  const styles ={
    form:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      flexGrow:'0',
    },
    label :{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      flexGrow:'0',
      marginBottom:'1em'
    }
  }
  return (
    <>
      <h1>React Hook Form</h1>
      <form onSubmit ={handleSubmit(onSubmit)} style={styles.label}>
        <label style={styles.label}>
          <input {...register('firstName',{required:true})} placeholder='First Name'/>
          <input {...register('lastName',{required:true})} placeholder='Last Name'/>
          <input {...register('gender',{required:true})} placeholder='Gender'/>
          <input {...register('phoneNumber',{required:true})} placeholder='Phone Number'/>
          <input {...register('email',{required:true})} placeholder='E-mail'/>
          <input {...register('password',{required:true})} placeholder='Password'/>
          <input {...register('passwordConfirm',{required:true})} placeholder='Confirm Password'/>
        </label>
        <input type="submit" value="SUBMIT" />
      </form>
    </>
  );
}

export default App;
