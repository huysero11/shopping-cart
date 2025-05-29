import "./ProductInCart.css";
import { Button, Space } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import cartSlice from "../../slices/cartSlice/cartSlice.jsx";

const ProductInCart = (props) => {
  console.log("in ProductInCart.jsx, props.info.props: ", props.info);
  const product = props.info;
  const dispatch = useDispatch();

  const handleIncreaseButtonClick = () => {
    dispatch(cartSlice.actions.increaseQuantity(product.id));
  };

  const handleDecreaseButtonClick = () => {
    if (product.quantity > 1) {
      dispatch(cartSlice.actions.decreaseQuantity(product.id));
    }
  };

  const handleCheckboxClick = (e) => {
    // console.log("in productCart.jsx, checkbox: ", e.target.checked);
    dispatch(cartSlice.actions.tickCheckbox(product.id));
  };

  const handleRemoveButtonClick = () => {
    dispatch(cartSlice.actions.removeFromCart(product.id));
  };

  return (
    <div className="product-in-cart-container" key={product.id}>
      <Link
        to={`/product-detail/${product.id}`}
        className="product-in-cart-image-link"
      >
        <img className="product-in-cart-image" src={product.image} />
      </Link>

      <div className="product-in-cart-info">
        <div className="product-in-cart-name">
          <strong>{product.name}</strong>
        </div>
        <div className="product-in-cart-price-and-quantity">
          <div className="product-in-cart-price">{`$${product.price}`}</div>

          <div className="product-in-cart-quantity-and-total-price">
            <Space.Compact className="product-in-cart-quantity">
              <Button
                onClick={handleDecreaseButtonClick}
                // product-id={product.id}
              >
                -
              </Button>
              <Button>{product.quantity}</Button>
              <Button
                onClick={handleIncreaseButtonClick}
                // product-id={product.id}
              >
                +
              </Button>
            </Space.Compact>

            <div className="product-in-cart-total-price">
              {`Total: $${(product.quantity * product.price).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
      <div className="product-in-cart-check-and-remove">
        <div className="product-in-cart-choose">
          <input
            type="checkbox"
            checked={product.checked}
            onChange={handleCheckboxClick}
          ></input>
        </div>
        <Button
          className="product-in-cart-remove"
          type="primary"
          danger
          icon={<CloseCircleOutlined />}
          onClick={handleRemoveButtonClick}
        ></Button>
      </div>
    </div>
  );
};

export default ProductInCart;
