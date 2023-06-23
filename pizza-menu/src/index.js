import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function PizzaSection() {
  const pizza = pizzaData.map((pizza) => {
    return (
      <>
        <section className="pizzaSection">
          <img
            src={pizza.photoName}
            className={!pizza.soldOut ? "" : "soldout"}
            alt={pizza.name}
          ></img>
          <h3 className="name">{pizza.name}</h3>
          <p className="name">{pizza.ingredients}</p>
          <span>{!pizza.soldOut ? pizza.price : "SOLD OUT"}</span>
        </section>
      </>
    );
  });
  return <>{pizza}</>;
}

function App() {
  return (
    <>
      <header className="header">
        <h1>Fast react pizza co.</h1>
        <Menu />
      </header>
      <PizzaSection />
    </>
  );
}
function Menu() {
  return (
    <>
      <menu className="menu">
        <h2>OUR MENU</h2>
        <p>
          Authentic Italian cusine, 6 creative dishes to choose from all from
          our stone oven, all organic all delicious
        </p>
      </menu>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// before react 18
// React.render(<App/>, document.getElementById("root"))
