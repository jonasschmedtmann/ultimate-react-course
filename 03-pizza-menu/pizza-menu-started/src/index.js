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
	return (
		<main className='menu'>
			<h2>Our Menu</h2>
			<Pizza
				name='Pizza Salamino'
				ingredients='Tomato, mozarella, and pepperoni'
				photoName='/pizzas/salamino.jpg'
				price={15}
			/>
		</main>
	);
}

function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const message =
		hour > openHour && hour < closeHour
			? 'We are currently open!'
			: 'Sorry! We are currently closed';
	return <footer className='footer'>{message}</footer>;
}

function Pizza(props) {
	return (
		<div className='pizza'>
			<img
				src={window.location.origin + props.photoName}
				alt={window.location.origin + pizzaData[2].photoName}
			></img>
			<div>
				<h3>{props.name}</h3>
				<p>{props.ingredients}</p>
				<span>{props.price + 3}</span>
			</div>
		</div>
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
