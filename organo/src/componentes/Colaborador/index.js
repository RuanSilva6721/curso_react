import './Colaborador.css'

const index = (props) => {
  return (
    <div className='colaborador'>
        <div className='cabecalho' style={{ background:props.corFundo }}>
            <img src={props.imagem} alt={props.nome}/>
        </div>
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>         
        </div>
        
    </div>
  )
}

export default index