import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";

function App() {

  const [tooglMode, setMode] = useState("light");

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const toogleDarkMode = () => {
    setMode(tooglMode === "light"? "dark" : "light" )

  }
  const appClass = `App ${tooglMode === "light" ? "light" : "dark"}`;

  return (
    <div>
      
    <div className={appClass}>
    <header>
        <h2>Items Slector</h2>
      </header>
      <button onClick={toogleDarkMode}>Dark Mode </button>

      <ShoppingList items={itemData} />
    </div>
    </div>
  );
}

export default App;
