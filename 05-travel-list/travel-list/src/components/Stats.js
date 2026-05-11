export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer>
        <p className="stats">
          <em>start adding some elements to your packaging list</em>
        </p>
      </footer>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "you have everything to go"
          : `🧳 you have ${numItems} items on your list, and you have already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
