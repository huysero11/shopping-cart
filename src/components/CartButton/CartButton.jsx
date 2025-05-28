import { FaShoppingCart } from "react-icons/fa"; // or any icon you like
import "./CartButton.css";
import { Link } from "react-router-dom";
import { totalQuantityInCartSelector } from "../../redux/selectors.jsx";
import { useSelector } from "react-redux";

const CartButton = () => {
  const totalQuantity = useSelector(totalQuantityInCartSelector);
  return (
    <Link to="/cart">
      <button className="cart-button">
        <FaShoppingCart />
        {totalQuantity > 0 && (
          <span className="cart-count">{totalQuantity}</span>
        )}
      </button>
    </Link>
  );
};

export default CartButton;
