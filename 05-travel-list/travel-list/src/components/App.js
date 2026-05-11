import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackagingList from "./PackagingList";
import Stats from "./Stats";

// import some_name form path

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "charger", quantity: 1, packed: true },
// ];

export default function App() {
  /*item has to be displayed at PakingList but it is modified at Forms
  now the item list has to be lifted to the closes parent which is app.
  -> so we define a new prop in Packaging list and pass the items list as a prop 
  -> create a new prop for Form to change or add the items to the item list and pass it as a prop function to the form component. this prop shoould take the handling function too
  -> since form has access to only the prop it will call the prop and it will inturn calll the handlefunction
   */
  const [items, setItems] = useState([]);
  //parent component that includes all the otehr components

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    //item should be added to the already existing items . so a callback function should be used
    // note in react we cannot use item.push because it alters or mutates it. so we have to create a new array every single insert
  }

  function handleDeleteItem(id) {
    console.log(id);
    //delete the item from ui by updating the state
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all the items?",
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackagingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
