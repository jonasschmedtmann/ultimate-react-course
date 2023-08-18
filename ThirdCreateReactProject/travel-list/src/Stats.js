export default function Stats({ packingItems }) {
  if (!packingItems.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );

  const num = packingItems.length;
  const packedItems = packingItems.filter((item) => item.packed).length;
  const packedPercent = Math.round((packedItems / num) * 100);
  return (
    <footer className="stats">
      <em>
        {packedPercent === 100
          ? "You've got everything! Ready to go ✈️"
          : `💼 You have ${num} items on your list, and you already packed ${packedItems} items, ${packedPercent}%`}
      </em>
    </footer>
  );
}
