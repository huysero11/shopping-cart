import { Button } from "antd";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { productListSelector } from "../../../redux/selectors.jsx";

import "./AddProductNotification.css";

const AddProductNotification = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const productList = useSelector(productListSelector);
  const product = useSelector(() => {
    return productList.find((item) => item.id === Number(id));
  });

  // console.log("In add product notification.jsx, id = ", product);

  const hanldeOKButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="success-notification-view">
      <div className="success-notification-container">
        <div className="success-notification-content">
          {`The product \"${product.name}\" has been added to your cart!`}
        </div>
        <img
          className="success-notification-image"
          src="/src/images/succeeded.png"
        />
        <div className="success-notification-OK-button-wrapper">
          <Button
            className="success-notification-OK-button"
            onClick={hanldeOKButtonClick}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddProductNotification;
