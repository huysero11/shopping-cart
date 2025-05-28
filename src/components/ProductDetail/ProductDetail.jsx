import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { productListSelector } from "../../redux/selectors.jsx";
import { FaStar } from "react-icons/fa";
import cartSlice from "../../slices/cartSlice/cartSlice.jsx";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams(); // id là string
  // console.log(id);
  const productList = useSelector(productListSelector);
  const product = useSelector(() => {
    return productList.find((item) => item.id === Number(id));
  });
  // console.log("product in ProductDetail.jsx: ", product);
  // console.log(productList);

  const dispatch = useDispatch();
  const handleAddButtonClick = () => {
    // console.log("In ProductDetail.jsx, button clicked: ", product);
    dispatch(cartSlice.actions.addToCart(product));
  };

  if (!product) {
    return <div>Cannot find the product</div>;
  }

  return (
    <>
      <div className="product-detail-container">
        <div className="upper-part">
          <img src={product.image} className="product-detail-img"></img>
          <div className="product-detail-info">
            <div className="product-detail-name">{product.title}</div>
            <div className="product-detail-category">
              <strong>Category:</strong> {` ${product.category}`}
            </div>
            <div className="product-detail-price">
              <strong>Price:</strong> {` ${product.price}`}
            </div>
            <div className="product-detail-description">
              <strong>Description:</strong> {` ${product.description}`}
            </div>
            {/* <button className="product-detail-add-button">Add to cart</button> */}
          </div>
        </div>
        <div className="lower-part">
          <p className="product-detail-star">
            {`${product.rating.rate} `} <FaStar />
          </p>
          <div className="product-detail-count-and-button-container">
            <div className="product-detail-count">
              <strong>Count:</strong> {` ${product.rating.count}`}
            </div>
            <Link
              to={`/product-detail/${product.id}/add-product-success-notification`}
              className="product-detail-add-button-link"
            >
              <button
                className="product-detail-add-button"
                onClick={handleAddButtonClick}
              >
                Add to cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
