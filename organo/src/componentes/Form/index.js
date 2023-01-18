import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import Label from '../Label'
import './Form.css'

const Form = (props) => {
    const time = [
        'Programação',
        'Front-End',
        'Banck-End',
        'Data Science',
        'Devops',
        'Mobile'
    ];
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [times, setTimes] = useState('');



    const aoSalvar = (e) => {
        e.preventDefault();
        console.log('Form foi submetido', nome, cargo, imagem, times)
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            times
        })
  
    }
    return (
        <div>
            <section className="Form">
                <form onSubmit={aoSalvar}>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Label 
                    obrigatorio={true} 
                    label="Nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    placeholder="Digite o seu nome" 
                    />
                    <Label 
                    obrigatorio={true} 
                    label="Cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    placeholder="Digite o seu cargo" 
                    />
                    <Label label="Imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    placeholder="Digite o endereço da Imagem" />

                    <DropdownList 
                    obrigatorio={true} 
                    itens={time} 
                    valor={times}
                    aoAlterado={valor => setTimes(valor)}
                    label="Time"
                    />
                    <Button>
                        Criar Card
                    </Button>

                </form>
            </section>

        </div>
    )
}

export default Form
