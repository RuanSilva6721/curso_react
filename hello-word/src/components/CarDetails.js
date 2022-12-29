import "./CarDetails.css";


const CarDetails = ({brand, km, color}) => {
  return (
    <div>

        <h2>Detalhes do carro</h2>
        <ul>
            <li>{brand}</li>
            <li>{km}</li>
            <li>{ color}</li>
        </ul>
        <p>testando css</p>
        <h3>testando css</h3>
    </div>
  )
}

export default CarDetails