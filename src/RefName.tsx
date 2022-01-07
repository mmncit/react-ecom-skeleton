import { useEffect, useState, useRef } from "react";

export default function RefName() {
  const [name, setName] = useState("");

  // three cases of useRef
  // 1. update state without re-rendering
  // 2. accessing dom element
  // 3. store the previous value of state

  // 1. update state without re-rendering
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  function focus() {
    (inputRef.current as unknown as HTMLInputElement).focus();
  }

  // 3. store the previous value of state
  const prevName = useRef("");
  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <>
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        My name is {name} and it used to be {prevName.current}
      </div>
      <div>Rendered {renderCount.current} time(s)</div>
      <button onClick={focus}>Focus</button>
    </>
  );
}
