import { useContext } from "react";
import "./scss/CartItems.scss";
import { MdClose } from "react-icons/md";
import CartContext from "../../contexts/Cart/Context";

const CartItems = ({ item, hook, refresh }) => {
  const [cart, cartActions] = useContext(CartContext)

  function amountHandler(e) {
    cartActions.add({
      name: item.name,
      item: {
        ...item,
        amount: (e.target.innerHTML === "+") ? item.amount + 1 : ((item.amount - 1 < 1) ? 1 : item.amount - 1 )
      }
    })
  }

    

  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={item.images[0].url} alt={item.images[0].public_id} />
        </div>
        <div className="prod-details">
          <span className="name">{item.name}</span>
          <MdClose onClick={() => {cartActions.remove(item.name); refresh(!hook)}} className="close-btn" />
          <div className="quantity-buttons">
            <span onClick={amountHandler} >-</span>
            <span>{item.amount}</span>
            <span onClick={(e) => (item.amount < item.stock) && amountHandler(e)} >+</span>
          </div>
          <div className="text">
            <span>{item.amount}</span>
            <span>x</span>
            <span className="highlight">{item.price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
