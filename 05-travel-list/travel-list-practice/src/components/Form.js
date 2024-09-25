import React, { useState } from 'react';
export default function Form({ itemList, setItemList }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();
		console.log('Form submitted');
		if (!description) return;
		const newItem = { description, quantity: Number(quantity), packed: false };
		setItemList([...itemList, newItem]);
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
