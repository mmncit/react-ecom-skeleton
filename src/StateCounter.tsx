import { useState } from "react";

function StateCounter() {
  // hooks must be used in a functional component
  // every times function run, hooks will executed in a same order
  // you cannot put a hook inside of a condition

  // State: a counter value
  const [counter, setCounter] = useState(4);

  // Action: code that causes an update to the state when something happens
  function increment() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  function decrement() {
    setCounter((prevCounter) => prevCounter - 1);
  }

  // View: the UI definition
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default StateCounter;
