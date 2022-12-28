import FirstComponent from './components/FirstComponent';

import logo from './logo.svg';
import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import Challenge from './components/Challenge';
import City from './assets/city.jpg'
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';

function App() {
  const UserName = "Ruan Felipe";
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div>
      <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <p> div</p>
      <h2>teste</h2>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      <ShowUserName name={UserName} />
      <CarDetails brand="VW" km={10000} color="Azul" />
    </div>
  );
}

export default App;
