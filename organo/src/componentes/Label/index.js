import './Label.css'

const Label = (props) => {

  const placeholderModificada  = `${props.placeholder}...`
  return (
    <div className="campo-texto">
        <label>
          {props.label}
        </label>
        <input type="text" name="name" placeholder={placeholderModificada}/>
    </div>
  )
}

export default Label