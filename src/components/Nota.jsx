import React from 'react'

export default (props) => {
    return(
        <div>
            <legend>Informe a nota </legend>
            <input type="number" name={props.name} value={props.Nota} onChange={(e)=>props.setNota(e)}></input>            
            
        </div>
    )
}