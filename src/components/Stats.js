import React from "react";

export function Stats({ items }) {
  const numItems = items.length;
  const packed =
    (items.filter((item) => item.packed === true).length / numItems) * 100;
  return (
    <footer className="stats">
      <em>
        You have {numItems} items on your list, and you already packed{" "}
        {items.filter((item) => item.packed === true).length} (
        {packed ? packed : 0})%
      </em>
    </footer>
  );
}
