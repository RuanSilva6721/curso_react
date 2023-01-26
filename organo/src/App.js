import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Form from './componentes/Form';
import Time from './componentes/Time';

function App() {
  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaboradorAdicionar = (colaborador) =>{
    console.log(colaborador);
    setColaboradores([colaboradores, colaborador])

    
  }

  return (
    <div className="App">
      <Banner/>
      <Form aoColaboradorCadastrado={aoNovoColaboradorAdicionar} />
      <Time nome="Programação" />
      <Time nome="Front-End" />
      <Time nome="Data Science" />
    </div>
  );
}

export default App;
