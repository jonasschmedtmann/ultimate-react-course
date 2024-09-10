import React, { useState } from 'react';
const initialItems = [
	{ id: 1, description: 'Passports', quantity: 2, packed: false },
	{ id: 2, description: 'Socks', quantity: 12, packed: true },
	{ id: 3, description: 'Charger', quantity: 12, packed: false },
];

export default function App() {
	const [item, setItem] = useState(initialItems);
	return (
		<div className='app'>
			<Logo />
			<Form
				item={item}
				setItem={setItem}
			/>
			<PackingList itemList={item} />
			<Stats />
		</div>
	);
}

function Logo() {
	return <h1>🏝️ Far Away 🧳</h1>;
}
function Form({ item, setItem }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();
		console.log('Form submitted');
		if (!description) return;
		const newItem = { description, quantity: Number(quantity), packed: false };
		setItem([...item, newItem]);
		setDescription('');
		setQuantity(1);
	}
	return (
		<form
			className='add-form'
			onSubmit={handleSubmit}
		>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(e.target.value)}
			>
				{Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
					<option
						value={num}
						key={num}
					>
						{num}
					</option>
				))}
			</select>
			<input
				type={'text'}
				placeholder='Item...'
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
			<button type={'submit'}>Add</button>
		</form>
	);
}
function PackingList({ itemList }) {
	return (
		<div className='list'>
			<ul style={{ overflow: 'auto', height: '100%' }}>
				{itemList.map((item) => (
					<Item
						item={item}
						key={item.id}
					/>
				))}
			</ul>
		</div>
	);
}
function Item({ item }) {
	return (
		<li>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button>❌</button>
		</li>
	);
}
function Stats() {
	return (
		<footer className='stats'>
			<em>💼 You have x items on your list, and you already packed X (x%)</em>
		</footer>
	);
}
