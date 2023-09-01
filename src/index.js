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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
}

function Header() {
  //const style={ color: "red", fontSize: "48px", textTransform: "uppercase" }
  //<h1 style={style}>
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = [pizzaData];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
     

      {/*    <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price="10"
      />
      <Pizza
        name="Pizza fungi"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/funghi.jpg"
        price={10}
      /> */}
      {numPizzas > 0 ? (
        <>
         <p>
         Authentoc Italian cuisine . 6 creactive dishes to choose from . All from
         out stone oven. all organic,all delicious
       </p>
        <ul className="pizzas">
          {pizzaData.map((pizza) => {
            return <Pizza pizzaObj={pizza} key={pizza.name} />;
          })}
        </ul>
        </>
        
      ) : (
        <p>We're still working on our meni.please come back later :) </p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  //we can use props but we destruct it into pizzaObj
/*   if (pizzaObj.soldOut) {
    return null;
  } */

  return (
    <li className={`pizza ${pizzaObj.soldOut ? 'sold-out':""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT": pizzaObj.price+"$"}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = openHour && hour <= closeHour;

  /*  if (hour >= openHour && hour <= closeHour) alert("we're currently open!");
  else alert("Sorry we're closed "); */
  /*  return React.createElement("footer", null, "We're currently open"); */
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          we're happy to welcome u between {openHour}:00h and {closeHour}:00h{" "}
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        we're open from {openHour}:00h to {closeHour}:00h . Come visit us or
        older online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
