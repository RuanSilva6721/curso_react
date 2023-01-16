import Button from '../Button'
import DropdownList from '../DropdownList'
import Label from '../Label'
import './Form.css'

const Form = () => {
    const time = [
        'Programação',
        'Front-End',
        'Banck-End',
        'Data Science',
        'Devops',
        'Mobile'
    ]
    return (
        <div>
            <section className="Form">
                <form>
                    <h2>Preencha os dados para criar o card do colaborador</h2>
                    <Label label="Nome" placeholder="Digite o seu nome" />
                    <Label label="Cargo" placeholder="Digite o seu cargo" />
                    <Label label="Imagem" placeholder="Digite o endereço da Imagem" />
                    <DropdownList itens={time} label="Time"/>
                    <Button>
                        Criar Card
                    </Button>

                </form>
            </section>

        </div>
    )
}

export default Form
