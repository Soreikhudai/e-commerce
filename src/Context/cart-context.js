import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  token: "",
  isLoggedin: false,
  login: (token) => {},
  logout: () => {},
});
export default CartContext;
