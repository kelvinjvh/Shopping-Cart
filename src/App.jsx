import "./App.css";
import CartHeader from "./Components/CartHeader";
import ListCart from "./Components/ListCart";
import ProductsList from "./Components/ProductsList";
import { useShoppingCart } from "./Hooks/useShoppingCart";

function App() {
  const {
    products,
    dispatch,
    totalUnidades,
    totalVenta,
    ShowModal,
    showModal,
  } = useShoppingCart();
  return (
    <>
      <CartHeader ShowModal={ShowModal} products={products} />
      <h2 style={{color:"#111",textAlign:"center",marginBottom:"2em"}}>Shop Products</h2>
      <ProductsList dispatch={dispatch} ShowModal={ShowModal} />
      <ListCart
        products={products}
        dispatch={dispatch}
        totalUnidades={totalUnidades}
        totalVenta={totalVenta}
        showModal={showModal}
        ShowModal={ShowModal}
      />
    </>
  );
}

export default App;
