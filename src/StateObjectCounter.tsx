import { useState } from "react";

function StateObjectCounter() {
  // hooks must be used in a functional component
  // every times function run, hooks will executed in a same order
  // you cannot put a hook inside of a condition

  // State: a counter value
  const [counter, setCounter] = useState(() => {
    return { count: 4, theme: "blue" };
  }); // once set a function in state, it run only on mount

  // Action: code that causes an update to the state when something happens
  function increment() {
    setCounter((prevCounter) => {
      return { ...prevCounter, count: prevCounter.count + 1 };
    });
  }

  function decrement() {
    setCounter((prevCounter) => {
      return { ...prevCounter, count: prevCounter.count - 1 };
    });
  }

  // View: the UI definition
  return (
    <>
      <button onClick={decrement}>-</button>
      <span>
        {counter.count} {counter.theme}
      </span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default StateObjectCounter;
