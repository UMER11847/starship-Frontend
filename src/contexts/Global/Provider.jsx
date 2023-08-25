import { useReducer } from "react";
import GlobalContext from "./Context";
import GlobalReducer from "./Reducer";
import GlobalActions from "./Actions";
import { useNavigate } from "react-router-dom";
// Utils
import getUser from "../../utils/getUser"
import getCookies from "../../utils/getCookies"
import { getBackendURL } from "../../utils/api"

const GlobalProvider = ({ children }) => {

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
