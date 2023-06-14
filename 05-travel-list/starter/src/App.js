import { useState } from "react";
import FlashCards from "./Flash";

// const intialItems = [
//   {
//     id: 1,
//     description: "Passports",
//     quantity: 2,
//     packed: true,
//   },
//   {
//     id: 2,
//     description: "Socks",
//     quantity: 12,
//     packed: false,
//   },
//   {
//     id: 3,
//     description: "Charger",
//     quantity: 12,
//     packed: true,
//   },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="app">
        <Logo />
        <Form onAddItems={handleAddItems} />
        <PackingList items={items} onDeleteItems={handleDeleteItems} />
        <Stats />
        <FlashCards />
      </div>
    </>
  );
}

function Logo() {
  return (
    <>
      <h1>🌴 Far Away 💼</h1>
    </>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip</h3>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item.."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

function PackingList({ items, onDeleteItems }) {
  return (
    <>
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item item={item} key={item.id} onDeleteItems={onDeleteItems} />
          ))}
        </ul>
      </div>
    </>
  );
}

function Item({ item, onDeleteItems }) {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    </>
  );
}
function Stats() {
  return (
    <>
      <footer className="stats">
        <em>
          You have X items on your list, and you are already packed X (X%)
        </em>
      </footer>
    </>
  );
}
