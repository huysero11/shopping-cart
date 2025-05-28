import { Link } from "react-router-dom";

import "./Product.css";

const Product = (props) => {
  // console.log("in product.jsx ", props.img);
  const handleCardClick = (e) => {
    // console.log("in product.jsx ", props.id);
  };

  return (
    <Link to={`/product-detail/${props.id}`}>
      <div id={props.id} className="product-card" onClick={handleCardClick}>
        <div className="product-img-wrapper">
          <img className="product-img" src={props.img} alt={props.name} />
        </div>

        <div className="product-name-wrapper">
          <div className="product-name">{props.name}</div>
        </div>

        <div className="product-price-wrapper">
          <div className="product-price">{"$" + props.price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
