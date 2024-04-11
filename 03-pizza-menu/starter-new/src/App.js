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


export function App() {
  return (
    <div className='container'>
    <Header/>
    <Menu/>
    <Footer/>
    </div>
  );
}

function Menu() {
  return (
  <main className="menu" >
    <h2>Our Menu</h2>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  </main>)
}

function  Pizza() {
  return (
  <div className="pizza">
      <h3>Peperoni pizza</h3>
      <img src="pizzas/salamino.jpg" alt="pizzaman"/>
  </div>
  )
}

function Header() {
  return (
  <header className="header">
  <h1>Pizza and company</h1>
  </header>
  )
}
function Footer() {
  <>
  </>
}