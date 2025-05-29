import { Route, Routes } from "react-router-dom";
import "./App.css";
// import "antd/dist/reset.css";
import CartPage from "./pages/CartPage/CartPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage.jsx";
import AddProductNotification from "./components/notifications/AddProductNotification/AddProductNotification.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/product-detail/:id" element={<ProductDetailPage />} />

        {/* full-page notification */}
        <Route
          path="/product-detail/:id/add-product-success-notification"
          element={<AddProductNotification />}
        />

        <Route
          path="/:id/add-product-success-notification"
          element={<AddProductNotification />}
        />
      </Routes>
    </>
  );
};

export default App;
