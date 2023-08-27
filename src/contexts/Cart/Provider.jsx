import { useReducer } from "react"
import CartContext from "./Context"
import CartActions from "./Actions"
import CartReducer from "./Reducer"


const CartProvider = ({ children }) => {

  let localCart = localStorage.getItem("cart")

  if(!localCart) {
    localCart = {}
    localStorage.setItem("cart", JSON.stringify({}))
  } else {
    localCart = JSON.parse(localCart)
  }

  const initialValue = localCart

  const [cart, dispatch] = useReducer(CartReducer, initialValue)

  const dispatcher = (type) => {
    return (payload) =>
      dispatch({
        type,
        payload,
      });
  };

  const add = dispatcher(CartActions.ADD_TO_CART)
  const remove = dispatcher(CartActions.REMOVE_FROM_CART)
  const reset = dispatcher(CartActions.RESET_CART)

  return (
    <CartContext.Provider value={[cart, { add, remove, reset }]} >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider