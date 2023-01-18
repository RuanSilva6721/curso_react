import { useState } from 'react';
import './App.css';
import Banner from './componentes/Banner';
import Form from './componentes/Form';

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

    </div>
  );
}

export default App;
