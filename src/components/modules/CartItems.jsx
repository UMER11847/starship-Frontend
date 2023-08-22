import "./scss/CartItems.scss";
import Imgprod from "../../assets/Product/earbuds.jpeg"
import {MdClose} from "react-icons/md"

const CartItems = () => {
  return (
    <div className="cart-products">
        <div className="cart-product">
            <div className="img-container">
                <img src={Imgprod}alt="" />
            </div>
            <div className="prod-details">
                <span className="name">Product name</span>
                <MdClose className="close-btn" />
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>3</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>5</span>
                    <span>x</span>
                    <span className="highlight">36$</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItems
