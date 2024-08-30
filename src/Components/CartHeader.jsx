import "../Styles/Header.css"
const CartHeader = ({ShowModal,products}) => {

  return (
    <header className="cart__header">
      <h1 className="card__header-logo">Ecommerce</h1>
      <div className="box__icon-cart" onClick={()=>ShowModal()}>
        <p className="header__amount-product">{products.length}</p>
        <img className="header__icon" src="./image/shopping-cart.png" alt="icon" />
      </div>
     
    </header>
  )
}

export default CartHeader