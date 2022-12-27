import { useState } from "react";

const ManageData = () => {
    let someData = 10;
    const [number, setNumber] = useState(15);

  return (
    <div>valor: {someData}
    <button onClick={ () =>(someData = 15)}>Mudar Váriavel</button>
    <p>{number}</p>
    <button onClick={ () => setNumber(25)}>Mudar Váriavel</button>
    <br/>
    </div>
  )
}

export default ManageData