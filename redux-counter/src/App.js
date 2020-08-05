import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Modal from "./Modal";
import Products from "./Product";

import thunk from "redux-thunk";

//reudcers
import countReducer from "./countReducer";
import productReducer from "./productReducer";
import modalReducer from "./modalReducer";

import { DECREASE, RESET, INCREASE } from "./actions";
import { Provider } from "react-redux";
//setup initial state
const defaultState = {
  count: 21,
  name: "jessica",
};
const middleware = [thunk];

//setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: RESET });

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
      <Modal />
      <Products />
    </Provider>
  );
};

export default App;
