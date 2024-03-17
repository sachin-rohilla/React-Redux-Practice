import React from "react";

import { createStore } from "redux";

const initialState = {
  name: "sachin",
  age: 23,
};

function updateReducer(state = initialState, action) {
  switch (action.type) {
    case "increment":
      return { ...state, age: state.age + 1 };
    case "decrement":
      return { ...state, age: state.age - 1 };
    case "incrementBy":
      return { ...state, age: state.age + action.payload };
    default:
      return state;
  }
}

const store = createStore(updateReducer);

store.subscribe(() => {
  console.log(
    store.getState(),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
});

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
store.dispatch({ type: "incrementBy", payload: 10 });
const ReduxPractice = () => {
  return <div>ReduxPractice</div>;
};

export default ReduxPractice;
