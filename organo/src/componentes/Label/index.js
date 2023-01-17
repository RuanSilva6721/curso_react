import './Label.css'
import {useState} from 'react'
const Label = (props) => {

  const placeholderModificada  = `${props.placeholder}...`

  //let valor = 'Ruan Felipe'

 //const [valor, setValor] =  useState('')

  const aoDigitar = (e) => {
    props.aoAlterado(e.target.value)

    // setValor();
    // console.log(valor)
  }
  return (
    <div className="campo-texto">
        <label>
          {props.label}
        </label>
        <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} type="text" name="name" placeholder={placeholderModificada}/>
    </div>
  )
}

export default Label