export default function Item({ item, onDeleteItems, onToggleItem }) {
  // Destructure the prop
  return (
    <li>
      <input
        type="checkbox"
        value={item.pecked}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* Since a function required an argument is a function call and not a */}
      {/* function reference // we have to use an arrow function to call it */}
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
