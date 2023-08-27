import StoreActions from "./Actions";

const StoreReducer = (store, action) => {
    switch(action.type) {
        // Set Products
        case StoreActions.SET_PRODUCTS: {
            return {
                ...store,
                products: action.payload
            }
        }
        // Return store as is
        default:
            return store
    }
}

export default StoreReducer