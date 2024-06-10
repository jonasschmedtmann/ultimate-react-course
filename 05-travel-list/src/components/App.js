import { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

export default function App() {
  // Since we need the items state on both Form and Packinglist component, we have to lift the state
  // to the first common parent
  const [items, setItem] = useState([]);

  function handleClearList() {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items?',
    );

    if (confirmed) setItem([]);
  }

  // Since we lift the State to App component, all the logic about updating the state have to be at the
  // same component as the piece of state
  function handleAddItems(item) {
    // Since in React we cannot mutate the array, so we spread the original array and create a new array
    setItem((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  return (
    <div className="app">
      <Logo />
      {/* Since we lift the item State up, we have to pass the update logic as porps back to Form */}
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
