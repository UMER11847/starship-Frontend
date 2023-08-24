import { useReducer } from "react";
import GlobalContext from "./Context";
import GlobalReducer from "./Reducer";
import GlobalActions from "./Actions";

const GlobalProvider = ({ children }) => {

  const url = `http://${import.meta.env.VITE_BACKEND_HOST}:${
        import.meta.env.VITE_BACKEND_PORT
      }${import.meta.env.VITE_BACKEND_BASE_ROUTE}`

  const initialState = {
    user: {
      loggedIn: false,
      role: "anonymouse",
    },
    env: {
      backendURL: url,
    },
    api: (path) => url + path 
  };

  const [state, dispatch] = useReducer(GlobalReducer, initialState);

  const dispatcher = (type) => {
    return (payload) =>
      dispatch({
        type,
        payload,
      });
  };

  const login = dispatcher(GlobalActions.LOGIN);
  const logout = dispatcher(GlobalActions.LOGOUT);

  return (
    <GlobalContext.Provider value={[state, { login, logout }]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
