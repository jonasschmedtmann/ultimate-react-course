import React, { useState } from 'react';
import Item from './Item';

export default function PackingList({
	itemList,
	handleDelete,
	handleToggleItem,
	handleClearAll,
}) {
	const [sortBy, setSortBy] = useState('input');
	let sortedItems = [...itemList];
	if (sortBy === 'description') {
		sortedItems = sortedItems.sort((a, b) =>
			a.description.localeCompare(b.description)
		);
	}
	if (sortBy === 'packed') {
		sortedItems = sortedItems.sort((a, b) => a.packed - b.packed);
	}
	if (sortBy === 'input') {
		sortedItems = [...itemList];
	}
	return (
		<div className='list'>
			<ul style={{ overflow: 'auto', height: '100%' }}>
				{sortedItems.map((item) => (
					<Item
						item={item}
						key={item.id}
						handleDelete={handleDelete}
						handleToggleItem={handleToggleItem}
					/>
				))}
			</ul>
			<div className='actions'>
				<select
					value={sortBy}
					onChange={(e) => setSortBy(e.target.value)}
				>
					<option value='input'>sort by input order</option>
					<option value='description'>sort by description</option>
					<option value='packed'>sort by packed status</option>
				</select>
				<button onClick={() => handleClearAll()}>Clear list</button>
			</div>
		</div>
	);
}
