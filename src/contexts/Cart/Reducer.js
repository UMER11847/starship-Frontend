import CartActions from "./Actions";

const CartReducer = (cart, action) => {
    switch(action.type) {
        case CartActions.ADD_TO_CART: {
            const obj = {
                ...cart,
                [action.payload.id]: action.payload.item
            }
            localStorage.setItem("cart", JSON.stringify(obj))
            return obj
        }
        case CartActions.REMOVE_FROM_CART: {
            delete cart[action.payload]
            localStorage.setItem("cart", JSON.stringify(cart))
            return cart
        }
        case CartActions.RESET_CART: {
            localStorage.setItem("cart", JSON.stringify([]))
            return []
        }
        default:
            return cart
    }
}

export default CartReducer