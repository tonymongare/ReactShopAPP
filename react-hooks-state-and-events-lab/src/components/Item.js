import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setCart] = useState(false);

  const handleCick = () => {
    setCart(!inCart);
  }

  return (
    <li className={inCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCick}>{ inCart ? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
