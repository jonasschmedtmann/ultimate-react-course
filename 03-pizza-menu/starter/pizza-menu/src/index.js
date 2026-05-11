import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
// webpack automatically imports

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

function App() {
  // creating a component in react
  return (
    <div className="container">
      {/* <h1>helo react!</h1> */}
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Fast React Pizza Co.
      </h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  console.log(numPizzas);

  return (
    <menu className="menu">
      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
      />
      {/* reusing the component and having a component inside anotehr component
       */}
      {/*<Pizza
        name="Pizza Fungi"
        ingredients="Tomato, mushrooms"
        photoName="pizzas/funghi.jpg"
        price="12"
      />
      <Pizza /> */}
      {/* replaceing individual pizza element eith a rendering list */}

      {/* {numPizzas>0 && (<ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name} />
          // its better to get teh  array object in one place and load it in the props
        ))}
      </ul>)} */}
      {numPizzas > 0 ? (
        // react fragment
        <>
          <h2>Our Menu</h2>
          <p>
            Authentic italian cuisine. 6 creative dishes to choose from. all
            from our stone oven, all organic, all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>we are still working on our menu. please come back latter :)</p>
      )}
    </menu>
  );
}

function Pizza(props) {
  console.log(props);
  // if (props.pizzaObj.soldOut) {
  //   return null;
  // }
  return (
    <div className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h2>{props.pizzaObj.name}</h2>
        <p>{props.pizzaObj.ingredients}</p>
        {props.pizzaObj.soldOut ? (
          <span>SOLDOUT</span>
        ) : (
          <span>{props.pizzaObj.price}</span>
        )}
        <span>{props.pizzaObj.soldOut ? "SOLDOUT" : props.pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("we are currently open");
  // } else {
  //   alert("we are closed");
  // }
  // return (
  //   <footer className="footer">
  //     {/* having a js script in html */}
  //     {new Date().toLocaleTimeString()}.we are currently open
  //   </footer>
  // );
  if (!isOpen) {
    return (
      <p>
        we are happy to welcome you between {openHour}:00 and {closeHour}:00.
      </p>
    );
  }
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          we are happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // using imperative mode of creating an Element and returning the markup to the component
  // return React.createElement("footer", null, "we are currently open");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we are open until {closeHour}:00 from {openHour}:00. come visit us or
        order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// rendering a component in react
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//rendering before react 18
// ReactDOM.reder(<App />,document.getElementById)
