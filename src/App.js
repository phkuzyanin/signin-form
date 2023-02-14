import React from 'react'
import Form from './components/Form'

function App() {
  const styles ={
    wrapper:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor:'#f6bd60',
      width:'100vw',
      height:'100vh'
    }
  }
  return (
    <div style={styles.wrapper}>
      <Form />
    </div>
  );
}

export default App;
