import { useReducer } from "react";
import StoreContext from "./Context";
import StoreReducer from "./Reducer";
import StoreActions from "./Actions";

const StoreProvider = ({ children }) => {

  const initialState = {
    products: []
  };

  const [store , dispatch] = useReducer(StoreReducer, initialState);

  const dispatcher = (type) => {
    return (payload) =>
      dispatch({
        type,
        payload,
      });
  };

  const setProducts = dispatcher(StoreActions.SET_PRODUCTS);

  return (
    <StoreContext.Provider value={[store, { setProducts }]}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;