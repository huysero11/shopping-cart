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
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="product-list">
        {status === "loading" && (
          <div className="loading">
            <FaSpinner className="spinner" /> Loading..
          </div>
        )}

        {status === "failed" && (
          <div className="failed">
            <MdErrorOutline className="error" /> {error}
          </div>
        )}

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
