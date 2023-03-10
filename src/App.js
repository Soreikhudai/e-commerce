import Store from "./page/Store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import ContactUs from "./page/ContactUs/ContactUs";
import ProductDetails from "./page/DetailsPage/DetailsPage";
import { useContext } from "react";
import AuthPage from "./page/AuthPage/AuthPage";
import CartContext from "./Context/cart-context";

const App = () => {
  const authCtx = useContext(CartContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {authCtx.isLoggedin ? (
            <>
              <Route path="/store" element={<Store />} />
              <Route path="/store/item/*" element={<ProductDetails />} />
            </>
          ) : (
            <Route path="/auth" element={<AuthPage />} />
          )}

          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="*" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
