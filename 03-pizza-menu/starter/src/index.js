import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./data.js";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza Shop</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <h3>
        {new Date().toLocaleTimeString()}. We're currently open for business.
      </h3>
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/margherita.jpg" alt="Pizza Margherita" />
      <h3>Pizza Margherita</h3>
      <p>Tomato and mozarella</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
