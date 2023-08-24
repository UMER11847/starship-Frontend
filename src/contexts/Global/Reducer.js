import GlobalActions from "./Actions"

const GlobalReducer = (state, action) => {
    switch (action.type) {
        case GlobalActions.LOGIN: {
            const user = {
                loggedIn: true,
                ...action.payload
            }
            return {...state, user }
        }
        case GlobalActions.LOGOUT: {
            return {
                ...state,
                user: {
                    loggedIn: false,
                    role: "anonymous"
                }
            }
        }
        default:
            return state
    }
    
}

export default GlobalReducer