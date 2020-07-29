import React from "react";
import Counter from "./Counter";
import { createStore } from "redux";
//setup initial state
const defaultState = {
  count: 76,
  name: "bob",
};
//setup reducer
function reducer(state, action) {
  // console.log({ state, action });
  // if (action.type === "DECREASE") {
  //   state.count = state.count - 1;
  //   return ;
  // }
  switch (action.type) {
    case "DECREASE":
      return { ...state, count: state.count - 1 };
    case "INCREASE":
      return { ...state, count: state.count + 1 };
    case "RESET":
      return { ...state, count: 0 };
  }

  return state;
}
//setup store
const store = createStore(reducer, defaultState);

store.dispatch({ type: "DECREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "INCREASE" });
store.dispatch({ type: "RESET" });

const App = () => {
  return <Counter state={store.getState()} />;
};

export default App;
