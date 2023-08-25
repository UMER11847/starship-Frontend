import GlobalActions from "./Actions"

const GlobalReducer = (state, action) => {
    switch (action.type) {
        case GlobalActions.LOGIN: {
            const user = {
                loggedIn: true,
                ...action.payload
            }
            localStorage.setItem("user", JSON.stringify(user))
            return {...state, user }
        }
        case GlobalActions.LOGOUT: {
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
        default:
            return state
    }
    
}

export default GlobalReducer