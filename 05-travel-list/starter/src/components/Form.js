import { useState } from "react";

export default function Form({ onAddNewItems }) {
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState("1");

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = {
			description,
			quantity,
			packed: false,
			id: Date.now(),
		};
		console.log(newItem);

		onAddNewItems(newItem);

		setDescription("");
		setQuantity("1");
	}

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				name=""
				id=""
				value={quantity}
				onChange={e => setQuantity(e.target.value)}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map(num => (
					<option value={num} key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				name=""
				id=""
				placeholder="Item..."
				value={description}
				onChange={e => setDescription(e.target.value)}
			/>
			<button>Add</button>
		</form>
	);
}
