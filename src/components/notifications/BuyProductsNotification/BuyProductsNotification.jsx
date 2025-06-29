import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import "./BuyProductsNotification.css";

const BuyProductsNotification = () => {
  const navigate = useNavigate();

  // console.log("In add product notification.jsx, id = ", product);

  const hanldeOKButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="buy-product-notification-view">
      <div className="buy-product-notification-container">
        <div className="buy-product-notification-content">
          {`You have successfully bought products!`}
        </div>
        <img
          className="buy-product-notification-image"
          src="/src/images/succeeded.png"
        />
        <div className="buy-product-notification-OK-button-wrapper">
          <Button
            className="buy-product-notification-OK-button"
            onClick={hanldeOKButtonClick}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BuyProductsNotification;
