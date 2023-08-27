import "./scss/Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItems from "./CartItems";
import { List } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../contexts/Cart/Context";
import GlobalContext from "../../contexts/Global/Context";

const Cart = ({ setShowCart }) => {
  const [global, globalActions] = useContext(GlobalContext)
  const [cart, cartActions ] = useContext(CartContext)
 
  const [emptyCart, setEmptyCart] = useState(false)
  const [hook, refresh] = useState(false)
  const [details, setDetials] = useState({
    subtotal: 0,
    shipping: 0,
    total: 0
  })

  useEffect(() => {
    const list = Object.values(cart)
    if(!list.length) {
      setEmptyCart(true)
    } else {
      setEmptyCart(false)
    }
    let subtotal = 0
    for (const item of list) {
      subtotal += item.price * item.amount
    }
    const shipping = + import.meta.env.VITE_SHIPPING_PRICE
    const total = shipping + subtotal
    setDetials({
      subtotal,
      shipping,
      total
    })

  }, [cart, hook])

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {emptyCart ? (

        <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart</span>
            <button onClick={() => {global.navigate("/"); setShowCart(false)}} className="return-cta">Return to Shop</button>
        </div>

        ) : (

        <>
        <List style={{height: "100%", overflow: 'auto'}} >
          {Object.values(cart).map((item) => {
            return <CartItems key={item._id} item={item} hook={hook} refresh={refresh} />
          })}
          
        </List>

        <div className="cart-footer">
          <div className="subtotal">
            <span className="text">Subtotal:</span>
            <span className="text total">{details.subtotal}$</span>
          </div>
          <div className="subtotal">
            <span className="text">Shipping:</span>
            <span className="text total">{details.shipping}$</span>
          </div>
          <div className="subtotal">
            <span className="text">Total:</span>
            <span className="text total">{details.total}$</span>
          </div>
          <div className="button">
            <button className="checkout-cta">Check out</button>
          </div>
        </div>
        </>
        )

        }

      </div>
    </div>
  );
};

export default Cart;
