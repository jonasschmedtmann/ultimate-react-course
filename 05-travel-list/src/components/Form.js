import { useState } from 'react';

export default function Form({ onAddItems }) {
  // We directly destructure the props so that we can directly use it

  // Step1 to implement `controlled elements`, create a state
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    // HTML will reload the page when submit a form, use e.preventDefault()
    // to stop the page reload
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);
    // Reset the field
    setDescription('');
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your trip 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* Step2 to implement `controlled elements`, set the state as input field value */}
      {/* Step3 to implement `controlled elements`, Connect the state with the value we type into the input field */}
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button>Add</button>
    </form>
  );
}
