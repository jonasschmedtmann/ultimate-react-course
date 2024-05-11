import { useState } from "react";
import Stats from "./Stats";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";

/* const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: true },
	{ id: 3, description: "Charger", quantity: 1, packed: false },
]; */

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems(items => [...items, item]);

		// setItems(items => items.push(item)) ❌
		// https://zh-hans.react.dev/reference/react/useState
	}

	function handleDeleteItems(id) {
		// console.log(id);
		setItems(items => items.filter(item => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems(items =>
			items.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}

	function handleClearList() {
		const confirmed = window.confirm(
			"Are you sure you want to delete all items?"
		);
		if (confirmed && items.length) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			<Form onAddNewItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItems}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}
