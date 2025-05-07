import CartButton from "./cartButton/CartButton.jsx";
import ProductList from "./productList/ProductList.jsx";

const App = () => {
  return (
    <>
      <ProductList />
      <CartButton count={1} />
    </>
  );
};

export default App;
