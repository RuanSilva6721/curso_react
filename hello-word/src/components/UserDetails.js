
const UserDetails = ({name, age}) => {
  return (
    <div>
       {age >= 18 && <p>Você pode tirar a carteira de motorista !</p>}
       {age < 18 && <p>Você não pode tirar a carteira de motorista !</p>}
       
       <p>hsffdhfkjhfjh</p>
       

    </div>
  )
}

export default UserDetails