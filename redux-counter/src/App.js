import React from "react";
import Counter from "./Counter";
import { createStore } from "redux";
import reducer from "./reducers";
import { DECREASE, RESET, INCREASE } from "./actions";
import { Provider } from "react-redux";
//setup initial state
const defaultState = {
  count: 21,
  name: "jessica",
};
//setup reducer

//setup store
const store = createStore(reducer, defaultState);

// store.dispatch({ type: DECREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: INCREASE });
// store.dispatch({ type: RESET });

const App = () => {
  return (
    <Provider store={store}>
      <Counter random="hi" />
    </Provider>
  );
};

export default App;
