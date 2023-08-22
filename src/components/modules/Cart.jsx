import "./scss/Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import React from 'react'
import CartItems from "./CartItems";

const Cart = ({setShowCart}) => {
  return (
    <div className="cart-panel"> 
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span className="close-btn" onClick={()=> setShowCart(false)}>
                <MdClose />
                <span className="text">close</span>
            </span>
        </div>
        {/* <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart</span>
            <button className="return-cta">Return to Shop</button>
        </div> */}
      <>
      <CartItems /> 
      <div className="cart-footer">
        <div className="subtotatl">
            <span className="text">Subtotal:</span>
            <span className="text total">123$</span>
        </div>
        <div className="button">
            <button className="checkout-cta">Check out</button>
        </div>
      </div>
      </>
      
      </div>
    </div>
  )
}

export default Cart

