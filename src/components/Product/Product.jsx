import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import cartSlice from "../../slices/cartSlice/cartSlice.jsx";
import { PlusCircleOutlined, ShoppingCartOutlined } from "@ant-design/icons";

import "./Product.css";

const Product = (props) => {
  console.log("in product.jsx, props:  ", props);
  const handleCardClick = (e) => {
    // console.log("in product.jsx ", props.id);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddIconsClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(props);
    dispatch(cartSlice.actions.addToCart(props));
    navigate(`/${props.id}/add-product-success-notification`);
  };

  return (
    <Link to={`/product-detail/${props.id}`}>
      <div id={props.id} className="product-card" onClick={handleCardClick}>
        <div className="product-img-wrapper">
          <img className="product-img" src={props.image} alt={props.name} />
        </div>

        <div className="product-name-wrapper">
          <div className="product-name">{props.name}</div>
        </div>

        <div className="product-price-and-icon-wrapper">
          <div
            className="product-add-icons-wrapper"
            onClick={handleAddIconsClick}
          >
            <PlusCircleOutlined className="product-add-plus-icon" />
            <ShoppingCartOutlined className="product-add-cart-icon" />
          </div>

          <div className="product-price">{"$" + props.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
