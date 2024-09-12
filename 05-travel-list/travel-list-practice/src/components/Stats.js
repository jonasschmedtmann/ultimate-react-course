export default function Stats({ itemList }) {
	const numItems = itemList.length;
	const numPackedItems = itemList.filter((item) => item.packed).length;
	const percentage = Math.round((numPackedItems / numItems) * 100);
	return (
		<footer className='stats'>
			<em>
				💼 You have {numItems} items on your list, and you already packed{' '}
				{numPackedItems} ({percentage}%)
			</em>
		</footer>
	);
}
