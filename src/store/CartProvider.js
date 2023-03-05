import CartContext from "./cart-context";
import { useEffect, useState } from "react";

const CartProvider = (props) => {
  const [items, updatedItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updatedItems([...items, item]);
  };

  const removeItemFromCartHandler = (id) => {};

  const Data = {
    items: items,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={Data}>{props.children}</CartContext.Provider>
  );
};
export default CartProvider;
