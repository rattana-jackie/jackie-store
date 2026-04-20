import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import RootLayout from "./Layout/RootLayout";
import Carts from "./pages/Carts";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="md:w-[70vw] m-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/carts" element={<Carts />}></Route>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
