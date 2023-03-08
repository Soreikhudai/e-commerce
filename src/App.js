import Store from "./page/Store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";
import ContactUs from "./page/ContactUs/ContactUs";
import ProductDetails from "./page/DetailsPage/DetailsPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/item/*" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
