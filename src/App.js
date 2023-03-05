import Music from "./components/Main/Music";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import { Fragment } from "react";
// import { useState } from "react";
// import Cart from "./components/Cart/Cart";
const App = () => {
  // const [cartIsShown, setCartIsShown] = useState(false);

  // const showCartHandler = () => {
  //   setCartIsShown(true);
  // };
  return (
    <Fragment>
      <NavBar />
      <Banner />
      <Music />
    </Fragment>
  );
};
export default App;
