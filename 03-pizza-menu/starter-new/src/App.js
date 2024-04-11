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
    <>
    <Header/>
    <Menu/>
    <Footer/>
    </>
  );
}

function Menu() {
  return (
  <>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  <Pizza/>
  </>)
}

function  Pizza() {
  return (
  <>
      <h1>Peperoni pizza</h1>
      <img src="pizzas/salamino.jpg" alt="pizzaman"/>
  </>
  )
}

function Header() {
  return (
  <>
  <p>Pizza and company</p>
  </>
  )
}
function Footer() {
  <>
  </>
}