import React, { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

export default function App() {
  const [itemsTwo, setItemsTwo] = useState([]);

  function handleAddItems(item) {
    setItemsTwo((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItemsTwo((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItemsTwo((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log(itemsTwo);
  }
  function handleClearItems() {
    const confirmation = window.confirm("Are you sure?");
    if (confirmation) {
      setItemsTwo([]);
    }
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onClearList={handleClearItems}
        items={itemsTwo}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats items={itemsTwo} />
    </div>
  );
}
