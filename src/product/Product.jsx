import "./Product.css";

const Product = (props) => {
  console.log("in product.jsx ", props.img);
  return (
    <div className="product-card">
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
  );
};

export default Product;
