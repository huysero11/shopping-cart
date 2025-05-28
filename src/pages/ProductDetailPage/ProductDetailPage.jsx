import HomeButton from "../../components/HomeButton/HomeButton.jsx";
import CartButton from "../../components/CartButton/CartButton.jsx";
import ProductDetail from "../../components/ProductDetail/ProductDetail.jsx";
import "./ProductDetailPage.css";

const ProductDetailPage = () => {
  return (
    <div className="product-detail-page">
      <HomeButton />
      <ProductDetail />
      <CartButton />
    </div>
  );
};

export default ProductDetailPage;
