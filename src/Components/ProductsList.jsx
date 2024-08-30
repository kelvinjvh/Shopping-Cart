import productlist from "../DB/ListProducts.json";
import "../Styles/ProductList.css";

const ProductsList = ({ dispatch }) => {
  return (
    <div className="products_content">
    
      {productlist.map((products) => (
        <div className="product_card" key={products.id}>
          <img className="image__product" src={products.image} />
          <p className="product_cart-name">{products.name}</p>
          <div className="card_price">
            <div>
              <p className="text_price">Price</p>
              <p className="product_price">S/{products.price}</p>
            </div>
            <span
              onClick={() =>
                dispatch({ type: "add_product", payload: products })
              }
            >
              🛒
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
