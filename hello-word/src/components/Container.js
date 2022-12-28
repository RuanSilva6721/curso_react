
const Container = ({children ,myFunction}) => {
  return (
    <div>Container
{children}
<button onClick={myFunction}>testet</button>
    </div>
  )
}

export default Container