import { Button } from "antd";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { productListSelector } from "../../../redux/selectors.jsx";

import "./AddProductNotification.css";

const AddProductNotification = () => {
  const { id } = useParams();
  const productList = useSelector(productListSelector);
  const product = useSelector(() => {
    return productList.find((item) => item.id === Number(id));
  });
  // console.log("In AddProductNotification.jsx, product = ", product);

  return (
    <div className="success-notification-view">
      <div className="success-notification-container">
        <div className="success-notification-content">
          {`The product \"${product.title}\" has been added to your cart!`}
        </div>
        <img
          className="success-notification-image"
          src="/src/images/succeeded.png"
        />
        <Link
          to={`/product-detail/${id}`}
          className="success-notification-OK-button-link"
        >
          <Button className="success-notification-OK-button">OK</Button>
        </Link>
      </div>
    </div>
  );
};

export default AddProductNotification;
