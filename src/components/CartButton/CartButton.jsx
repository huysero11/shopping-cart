import { FaShoppingCart } from "react-icons/fa"; // or any icon you like
import "./CartButton.css";
import { Link } from "react-router-dom";

const CartButton = ({ count }) => {
  return (
    <Link to="/cart">
      <button className="cart-button">
        <FaShoppingCart />
        {count > 0 && <span className="cart-count">{count}</span>}
      </button>
    </Link>
  );
};

export default CartButton;
