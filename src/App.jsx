import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CartPage from "./pages/CartPage/CartPage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage.jsx";
import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product-detail" element={<ProductDetailPage />} />
      </Routes>
    </>
  );
};

export default App;
