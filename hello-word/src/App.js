import FirstComponent from './components/FirstComponent';

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
import Container from './components/Container';
import UserDetails from './components/UserDetails';
import MyForm from './components/MyForm';

function App() {
  const UserName = "Ruan Felipe";
  const cars = [
    {id: 1, brand: "ferrari", color: "amarela", newCar: true, km: 0},
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 235445},
    {id: 3, brand: "Renault", color: "Azul", newCar: false, km: 445445540},
  ];
  function showMessage(){
    console.log("testando função no props");
  }
  const users  =[
    {id: 1, name: "Ruan", age: 18},
    {id: 2, name: "Ana", age: 14},
    {id: 3, name: "Felipe", age: 13},
    {id: 4, name: "Carlos", age: 21},
    {id: 5, name: "Júlia", age: 43},
  ]

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <div>
      <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>

    <h2>Forms</h2>
    <MyForm />


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
      <CarDetails brand="Fiat" km={5000} color="Branco" />
      {cars.map((car) =>(
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color} />
      ))}

      <Container myFunction={showMessage}>
        <p>kdfsfhkjfhkfdhkdfshkfdk</p>
      </Container>
      {users.map((user) => (
        <UserDetails key={user.id}  name={user.name} age={user.age} />
      ))
      }
      
    </div>
  );
}

export default App;
