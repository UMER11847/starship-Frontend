import GlobalActions from "./Actions"

const GlobalReducer = (global, action) => {
    switch (action.type) {
        // Update User
        case GlobalActions.UPDATE_USER: {
            const user = {
                loggedIn: true,
                ...action.payload
            }
            localStorage.setItem("user", JSON.stringify(user))
            return {...global, user }
        }
        // Reset User
        case GlobalActions.RESET_USER: {
            const user = {
                loggedIn: false,
                role: "anonymous"
            }
            localStorage.setItem("user", JSON.stringify(user))
            return {
                ...global,
                user
            }
        }
        // Return state as is
        default:
            return global
    }
    
}

export default GlobalReducer