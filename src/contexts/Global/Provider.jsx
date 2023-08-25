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

  const [global, dispatch] = useReducer(GlobalReducer, initialState);

  const dispatcher = (type) => {
    return (payload) =>
      dispatch({
        type,
        payload,
      });
  };

  const updateUser = dispatcher(GlobalActions.UPDATE_USER);
  const resetUser = dispatcher(GlobalActions.RESET_USER);

  console.log(global)
  return (
    <GlobalContext.Provider value={[global, { updateUser, resetUser }]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
