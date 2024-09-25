import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//for react 18 and above
//import ReactDOM from 'react-dom/client';

const pizzaData = [
	{
		name: 'Focaccia',
		ingredients: 'Bread with italian olive oil and rosemary',
		price: 6,
		photoName: '/pizzas/focaccia.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Margherita',
		ingredients: 'Tomato and mozarella',
		price: 10,
		photoName: '/pizzas/margherita.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Spinaci',
		ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
		price: 12,
		photoName: '/pizzas/spinaci.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Funghi',
		ingredients: 'Tomato, mozarella, mushrooms, and onion',
		price: 12,
		photoName: '/pizzas/funghi.jpg',
		soldOut: false,
	},
	{
		name: 'Pizza Salamino',
		ingredients: 'Tomato, mozarella, and pepperoni',
		price: 15,
		photoName: '/pizzas/salamino.jpg',
		soldOut: true,
	},
	{
		name: 'Pizza Prosciutto',
		ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
		price: 18,
		photoName: '/pizzas/prosciutto.jpg',
		soldOut: false,
	},
];

function App() {
	return (
		<div className='container'>
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

function Header() {
	return (
		<header className='header footer'>
			<h1>Fast React Pizza Company</h1>
		</header>
	);
}

function Menu() {
	const pizzas = pizzaData;
	const description = 'Authentic Italian pizza made with love';
	return (
		<main className='menu'>
			<h2>Our Menu</h2>
			<p>{description}</p>
			<ul className='pizzas'>
				{pizzas.map((pizza) => (
					<>
						<Pizza
							pizza={pizza}
							key={pizza.name}
						/>
					</>
				))}
			</ul>
		</main>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour > openHour && hour < closeHour;
	if (!isOpen) {
		return (
			<footer className='footer'>
				<p>{'Sorry! We are currently closed'}</p>
			</footer>
		);
	}
	return (
		<footer className='footer'>
			<p>{'We are currently open!'}</p>
		</footer>
	);
}

function Pizza(props) {
	const { name, ingredients, price, photoName, soldOut } = props.pizza;
	return (
		<li className={`pizza ${soldOut && 'sold-out'}`}>
			<img
				src={window.location.origin + photoName}
				alt={window.location.origin + pizzaData[2].photoName}
			></img>
			<div>
				<h3>{name}</h3>
				<p>{ingredients}</p>
				<span>{soldOut ? 'SOLD OUT !!!' : price * 30}</span>
			</div>
		</li>
	);
}
//For react 18  and above
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

ReactDOM.render(<App />, document.getElementById('root'));
