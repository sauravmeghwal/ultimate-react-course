import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'

function App() {
  return (
    <>
      <header className="header">
        <h1>Fast react pizza co.</h1>
        <Menu/>
      </header>
    </>
  );
}
function Menu(){
  return(
    <>
    <menu className="menu">
      <h2>OUR MENU</h2>
      <p>Authentic Italian cusine, 6 creative dishes to choose from all from our stone oven, all organic all delicious</p>
    </menu>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// before react 18 
// React.render(<App/>, document.getElementById("root"))