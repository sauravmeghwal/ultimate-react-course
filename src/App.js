import React, { useState } from "react";

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
    console.log(itemsTwo)
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={itemsTwo}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
      />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Vacation</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [item, setItem] = useState(1);

  const handleSubmit = function (e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity: item,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    setDescription("");
    setItem(1);
  };

  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do you need for you trip?</h3>
        <select value={item} onChange={(e) => setItem(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add Item</button>
      </form>
    </>
  );
}

function PackingList({ items, onDeleteItem, onToggleItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onToggleItem={onToggleItem}
            onDeleteItem={onDeleteItem}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {`${item.quantity} ${item.description}`}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em> You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
