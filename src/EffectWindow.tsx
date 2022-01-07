import { useState, useEffect } from "react";

export default function EffectWindow() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  // use effect happens after rendering
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // clean up  when component unmounts / state changes
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // empty array indicates this effect run only once (after rendering)

  return <div>{windowWidth}</div>;
}
