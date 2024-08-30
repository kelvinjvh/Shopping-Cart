import "../Styles/ListCart.css";

const ListCart = ({
  products,
  dispatch,
  totalUnidades,
  totalVenta,
  showModal,
  ShowModal,
}) => {
  return (
    <div
      className={`${showModal ? "show" : "hidden"} conteiner__products-list`}
    >
      <div className="products_list">
        <div className="heder__shopping-cart">
          <h2>Shoppin Cart</h2>
          <span className="header__btn-close" onClick={() => ShowModal()}>
            ❌
          </span>
        </div>
        {products.map((product) => (
          <div className="cart__item-card" key={product.id}>
            <div className="content_product-cart">
              <img className="cart__item-image" src={product.image} alt="" />
              <p className="cart__item-name">{product.name}</p>
              <p className="cart__item-price">S/{product.price}</p>
              <div className="contentn__buttons-actions">
                <span
                  className="button__increase btn__actions"
                  onClick={() =>
                    dispatch({ type: "increase_product", payload: product })
                  }
                >
                  +
                </span>
                <span>{product.amount}</span>
                <span
                  className="button__decrease btn__actions"
                  onClick={() =>
                    dispatch({ type: "decrease_product", payload: product })
                  }
                >
                  -
                </span>
                <img
                  src="./public/image/icon-delete.png"
                  alt="icon"
                  className="cart__btn-delete"
                  onClick={() =>
                    dispatch({ type: "delete_product", payload: product })
                  }
                />
              </div>
            </div>
          </div>
        ))}
        <div className="total_sales">
          <p>Total De Productos : {products.length}</p>
          <p>Total De Unidades : {totalUnidades}</p>
          <p>Total De Venta : S/{totalVenta}</p>
        </div>
      </div>
    </div>
  );
};

export default ListCart;
