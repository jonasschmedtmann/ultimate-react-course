export default function Item({ item, onDeleteItem, onToggleItems }) {
  //Item({}->indicates prop)
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />{" "}
      {/**/}
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌&time</button>
    </li>
  );
}
