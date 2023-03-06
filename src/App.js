import Store from "./page/Store/Store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import About from "./page/About/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
