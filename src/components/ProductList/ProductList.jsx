import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { MdErrorOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  productListErrorSelector,
  productListSelector,
  productListStatusSelector,
} from "../../redux/selectors.jsx";
import { fetchProducts } from "../../slices/productsSlice/productsSlice.jsx";
import Product from "../Product/Product.jsx";
import "./ProductList.css";

const ProductList = () => {
  const status = useSelector(productListStatusSelector);
  const error = useSelector(productListErrorSelector);
  const products = useSelector(productListSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, []);

  if (status === "loading") {
    return (
      <div className="loading">
        <FaSpinner className="spinner" /> Loading..
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="failed">
        <MdErrorOutline className="error" /> {error}
      </div>
    );
  }

  return (
    <>
      <div className="product-list">
        {products.map((product) => {
          //   console.log(product);
          return (
            <div className="product-item" key={product.id}>
              <Product
                id={product.id}
                img={product.image}
                name={product.title}
                price={product.price}
                description={product.description}
                rating={product.rating.rate}
                count={product.rating.count}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
