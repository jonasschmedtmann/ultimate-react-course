import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';
// const initialItems = [
// 	{ id: 1, description: 'Passports', quantity: 2, packed: false },
// 	{ id: 2, description: 'Socks', quantity: 12, packed: false },
// 	{ id: 3, description: 'Charger', quantity: 12, packed: false },
// ];

export default function App() {
	const [itemList, setItemList] = useState([]);
	const handleDelete = (id) => {
		setItemList((prevState) => prevState.filter((item) => item.id !== id));
	};
	const handleClearAll = () => {
		const confirm = window.confirm('Are you sure you want to clear the list?');
		if (!confirm) return;
		setItemList([]);
	};
	function handleToggleItem(id) {
		setItemList((prevState) =>
			prevState.map((item) => {
				if (item.id === id) {
					return {
						...item,
						packed: !item.packed,
					};
				}
				return item;
			})
		);
	}
	return (
		<div className='app'>
			<Logo />
			<Form
				itemList={itemList}
				setItemList={setItemList}
			/>
			<PackingList
				itemList={itemList}
				handleDelete={handleDelete}
				handleToggleItem={handleToggleItem}
				handleClearAll={handleClearAll}
			/>
			<Stats itemList={itemList} />
		</div>
	);
}
