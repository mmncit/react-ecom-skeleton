import { useState, useMemo } from "react";

function slowFunction(num: number) {
  console.log("calling slow function");
  for (let i = 0; i < 10000000; i++) {}
  return num * 2;
}

export default function MemoSlowFn() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number); // memoize slow function to call only when the number changes
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(parseInt(e.target.value));
        }}
      />

      <button
        onClick={() => {
          setDark((prevDark) => !prevDark);
        }}
      >
        Change Theme
      </button>

      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
}
