import './Form.css'

const Form = () => {
  return (
    <div className="campo-texto">
        <label for="name">Nome</label>
        <input type="text" name="name" placeholder="Digite o seu nome"/>
    </div>
  )
}

export default Form