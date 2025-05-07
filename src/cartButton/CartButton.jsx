import { FaShoppingCart } from "react-icons/fa"; // or any icon you like
import "./CartButton.css";

const CartButton = ({ count }) => {
  return (
    <button className="cart-button">
      <FaShoppingCart />
      {count > 0 && <span className="cart-count">{count}</span>}
    </button>
  );
};

export default CartButton;
