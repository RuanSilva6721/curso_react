import { useState } from "react";
import "./MyForm.css";

const MyForm = ({user}) => {
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, email)
        console.log("enviando formulário")

        setEmail("");
        setName("");
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
    <div>
        <label htmlFor="name">Nome</label>
     <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name}/>      
    </div>
    <label>
        <span>E-mail</span>
    <input type="email" name="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} value={email} />
    </label>
    <input type="submit"  value="Enviar" />
        </form>


    </div>
  )
}

export default MyForm