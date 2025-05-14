import CartButton from "../../components/CartButton/CartButton";
import ProductList from "../../components/ProductList/ProductList";

const HomePage = () => {
  return (
    <>
      <CartButton count={5} />
      <ProductList />
    </>
  );
};

export default HomePage;
