import GlobalActions from "./Actions"

const GlobalReducer = (state, action) => {
    switch (action.type) {
        // Update User
        case GlobalActions.UPDATE_USER: {
            const user = {
                loggedIn: true,
                ...action.payload
            }
            localStorage.setItem("user", JSON.stringify(user))
            return {...state, user }
        }
        // Reset User
        case GlobalActions.RESET_USER: {
            const user = {
                loggedIn: false,
                role: "anonymous"
            }
            localStorage.setItem("user", JSON.stringify(user))
            return {
                ...state,
                user
            }
        }
        case GlobalActions.SHOW_CART: {
            return {
                ...state,
                store: {
                    ...state.store,
                    showCart: action.payload
                }
            }
        }
        // Return state as is
        default:
            return state
    }
    
}

export default GlobalReducer