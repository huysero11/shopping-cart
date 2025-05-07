import { Link } from "react-router-dom";
import HomeButton from "../../components/HomeButton/HomeButton.jsx";
import CartProducts from "../../components/CartProducts/CartProducts.jsx";

const CartPage = () => {
  return (
    <div>
      <HomeButton />
      <CartProducts />
    </div>
  );
};

export default CartPage;
