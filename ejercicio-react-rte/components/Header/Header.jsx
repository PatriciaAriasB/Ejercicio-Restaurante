import "./Header.css"

const Header = (props) => {
    console.log(props);
  return (
    <div><h1>Carta Restaurante {props.name}</h1></div>
  )
}

export default Header