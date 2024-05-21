import "./Home.css"


const Home = (props) => {
  const menu = props.menu
  console.log(menu);

  const listDishes = menu.map(dish => {
    return (
      <li>
        <p>Nombre del plato: {dish.name}</p>
        <p> Descripción: {dish.description}</p>
        <p>Precio: {dish.price}€</p>
      </li>    
    )
  })

  return (
    <div>Home
      <ul>{listDishes}</ul>
    </div>
  )
}

export default Home