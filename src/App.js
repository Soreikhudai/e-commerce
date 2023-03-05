import Music from "./components/Main/Music";
import Banner from "./components/Banner/Banner";
import NavBar from "./components/NavBar/NavBar";
import CartProvider from "./store/CartProvider";
const App = () => {
  return (
    <CartProvider>
      <NavBar />
      <Banner />
      <Music />
    </CartProvider>
  );
};
export default App;
