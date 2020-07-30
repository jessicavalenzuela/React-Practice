import React from "react";
import Counter from "./Counter";
import { createStore, combineReducers } from "redux";

import Modal from "./Modal";

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
//setup reducer

//setup store
const store = createStore(
  combineReducers({
    countState: countReducer,
    modalState: modalReducer,
    productState: productReducer,
  }),
  defaultState
);

// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: RESET });

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="hi" />
      <Modal />
    </Provider>
  );
};

export default App;
