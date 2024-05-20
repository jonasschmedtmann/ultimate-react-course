import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
//   { id: 3, description: "Charger", quantity: 1, packed: false },
// ];
export default function App() {
  const [packingItems, setPackingItems] = useState([]);

  // useEffect(() => {
  //   getItems();
  // }, []);

  // function getItems() {
  //   setPackingItems(initialItems);
  // }
  function handleAddItem(newItem) {
    setPackingItems((packingItems) => [...packingItems, newItem]);
  }
  function handleDeleteItem(id) {
    setPackingItems((packingItems) =>
      packingItems.filter((item) => item.id !== id)
    );
  }

  function handleUpdateItem(id) {
    setPackingItems((packingItems) =>
      packingItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearPackingList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) {
      setPackingItems([]);
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <PackingList
        packingItems={packingItems}
        onDeleteItem={handleDeleteItem}
        onUpdateItem={handleUpdateItem}
        onClear={clearPackingList}
      />
      <Stats packingItems={packingItems} />
    </div>
  );
}
