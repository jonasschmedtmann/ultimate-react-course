import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  packingItems,
  onDeleteItem,
  onUpdateItem,
  onClear,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = packingItems;
  else if (sortBy === "description")
    sortedItems = packingItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  else if (sortBy === "packed")
    sortedItems = packingItems.filter((item) => item.packed);

  const items = sortedItems.map((item) => (
    <Item
      key={item.id}
      item={item}
      onDeleteItem={onDeleteItem}
      onUpdateItem={onUpdateItem}
    />
  ));
  return (
    <div className="list">
      <ul>{items}</ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClear}>Clear list</button>
      </div>
    </div>
  );
}
