import React, { useState } from "react";

export function Form({ onAddItems }) {
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
