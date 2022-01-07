import { useContext } from "react";
import { ThemeContext } from "./ContextTheme";

export default function FunctionContextComponent() {
  const darkTheme = useContext(ThemeContext);
  const themeStyle = {
    background: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyle}>Function Theme</div>;
}
