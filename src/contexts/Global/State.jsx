// import { useReducer } from "react";
// import GlobalContext from "./Context";

// const GlobalState = ({ children }) => {

//     const initialState = {
//         user: {
//             loggedIn: false,
//             role: "anonymouse"
//         }
//     }

//     const [state, dispatch] = useReducer(reducer, initialState)

//     return (
//         <GlobalContext.Provider value={state}>
//             {children}
//         </GlobalContext.Provider>
//     )
// }

// export default GlobalState;