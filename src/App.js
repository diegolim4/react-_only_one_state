import React from 'react'
import Forms from './components/Forms'
import SomaNotas from './components/SomaNotas'

export default () => {
  return(
    <>
      <h1 style={{color:'#f009'}}>Formulário </h1>
      <Forms /> 
      
      <h1 style={{color:'#f009'}}>Soma de Notas </h1>
      <SomaNotas />           
    </>
  )
  
}