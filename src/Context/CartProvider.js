import CartContext from "./cart-context";
import { useState } from "react";
const CartProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [items, updatedItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updatedItems([...items, item]);
  };

  const removeItemFromCartHandler = (id) => {};

  const userIsLoggedin = !!token;
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const Data = {
    items: items,
    totalAmount: 0,
    token: token,
    isLoggedin: userIsLoggedin,
    login: loginHandler,
    logout: logoutHandler,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={Data}>{props.children}</CartContext.Provider>
  );
};
export default CartProvider;
