import { useReducer } from "react";
import GlobalContext from "./Context";
import GlobalReducer from "./Reducer";
import GlobalActions from "./Actions";
import { useNavigate } from "react-router-dom";

const GlobalProvider = ({ children }) => {
  function getCookies() {
    const cookiesString = document.cookie;
    const cookiesArray = cookiesString.split('; ');

    const cookiesObject = {};

    cookiesArray.forEach(cookie => {
      const [name, value] = cookie.split('=');
      cookiesObject[name] = value;
    }); 
    return cookiesObject
  } 


  function getBackendURL(path) {
    return `http://${import.meta.env.VITE_BACKEND_HOST}:${
        import.meta.env.VITE_BACKEND_PORT
      }${import.meta.env.VITE_BACKEND_BASE_ROUTE}` + (path || "")
  }

  function getUser() {
    const user = JSON.parse(localStorage.getItem("user"))
    return user ? user : {
      loggedIn: false,
      role: "anonymous"
    }
  }

  const initialState = {
    user: getUser(),
    cookies: getCookies(),
    api: (path) => getBackendURL(path),
    navigate: useNavigate()
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

  console.log(state)
  return (
    <GlobalContext.Provider value={[state, { login, logout }]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
