import "./ProductList.css";
import { useEffect, useState } from "react";
import Product from "../Product/Product.jsx";
import { FaSpinner } from "react-icons/fa";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);

      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="product-list">
        {loading && (
          <div className="loading">
            <FaSpinner className="spinner" /> Loading..
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
