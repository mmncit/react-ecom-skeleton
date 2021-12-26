import { Provider, connect } from "react-redux";
import { store } from "./store";

import React from "react";

type componentParams = {
  count: number;
  handleIncrementClick: any;
  handleDecrementClick: any;
};

export const Component = ({
  count,
  handleDecrementClick,
  handleIncrementClick,
}: componentParams) => (
  <div>
    <h1>Helloworld React & Redux! {count}</h1>
    <button onClick={handleDecrementClick}>Decrement</button>
    <button onClick={handleIncrementClick}>Increment</button>
  </div>
);

const mapStateToProps = (state: any) => {
  return {
    count: state,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  console.log(typeof dispatch);
  return {
    handleIncrementClick: () => dispatch({ type: "INCREMENT" }),
    handleDecrementClick: () => dispatch({ type: "DECREMENT" }),
  };
};
export const Container = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export function ReduxApp() {
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
