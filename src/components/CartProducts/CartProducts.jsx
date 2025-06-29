import ProductInCart from "../ProductInCart/ProductInCart.jsx";
import { useSelector } from "react-redux";
import {
  productInCartListSelector,
  totalPriceInCartSelector,
  totalQuantityInCartSelector,
} from "../../redux/selectors.jsx";
import cartSlice from "../../slices/cartSlice/cartSlice.jsx";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import "./CartProducts.css";

const CartProducts = () => {
  const productInCartList = useSelector(productInCartListSelector);
  const totalPrice = useSelector(totalPriceInCartSelector);
  const totalQuantity = useSelector(totalQuantityInCartSelector);

  const dispatch = useDispatch();

  const handleChooseAllCheckboxClicked = () => {
    dispatch(cartSlice.actions.tickChooseAllCheckbox());
  };

  const handleChooseAllTextClicked = () => {
    handleChooseAllCheckboxClicked();
    const checkboxElement = document.querySelector(".cart-choose-all-checkbox");
    checkboxElement.checked = !checkboxElement.checked;
  };

  return (
    <div className="cart-container">
      <h3 className="cart-title">Product list</h3>

      <div className="cart-scroll-box">
        {productInCartList.map((item) => (
          <ProductInCart key={item.id} info={item} />
        ))}
      </div>

      {/* Total price row */}
      <div className="cart-footer">
        <div className="cart-choose-all-container">
          <input
            type="checkbox"
            className="cart-choose-all-checkbox"
            onChange={handleChooseAllCheckboxClicked}
          />
          <span
            className="cart-choose-all-text"
            onClick={handleChooseAllTextClicked}
          >
            Choose all
          </span>
        </div>

        <div className="cart-total">
          <div>{`${totalQuantity} products`}</div>
          <strong>{`Total: ${totalPrice.toFixed(2)}`}</strong>
        </div>

        <Button className="cart-footer-buy-button" type="primary">
          Buy
        </Button>
      </div>
    </div>
  );
};

export default CartProducts;
