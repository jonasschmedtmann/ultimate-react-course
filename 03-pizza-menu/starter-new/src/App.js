const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu() {
  return (
  <main className="menu" >
    <h2>Our Menu</h2>
    <ul className='pizzas'>
    {pizzaData.map((e)=>{
      return <Pizza PizzaObj = {e} />
    })}
    </ul>
  </main>)
}

function  Pizza(props) {
  return (
  <div className="pizza" >
    <img src={props.PizzaObj.photoName}  />
      <div>  
      <h3>{props.PizzaObj.name}</h3>
      <p>{props.PizzaObj.ingredients}</p>
      <span>$ {props.PizzaObj.price}</span>
      </div>
  </div>
  )
}

export function App() {
  return (
    <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  );
}





function Header() {
  return (
  <header className="header">
  <h1>Pizza and company</h1>
  </header>
  )
}

// the footer is below lol
function Footer() {
  const openHours = 8
  const closeHours = 18
  let stmt = ''
  const date = new Date().getHours()
  const time =  ( openHours < date && date < closeHours )

  return (
    <Footer className='footer'>
      {time && (
        <div className="order">
          <p>
            We are open until {closeHours}:00 Come visit us or Order online
          </p>
          <button className="btn">Order</button>
        </div>

      )}
    </Footer>
  )
}