// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import IngredientList from "./component/IngredientList";
import BurgerStack from "./component/BurgerStack";

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

const App = () => {
  const [stack, useStack] = useState([]);

  const addToBurger = (stack) => {
    useStack((preStack) => [...preStack, stack]);
  };

  const removeFromBurger = (idx) => {
    useStack((prevStack) => prevStack.toSpliced(idx, 1));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          addItem={addToBurger}
          ingredients={availableIngredients}
        />
        <BurgerStack removeItem={removeFromBurger} ingredients={stack} />
      </section>
    </main>
  );
};

export default App;
