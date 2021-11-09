import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  React.createElement(
    "ul",
    { style: { color: "blue" } },
    React.createElement("li", { style: { color: "green" } }, "Monday"),
    React.createElement("li", { style: { color: "red" } }, "Tuesday")
  ),
  document.getElementById("root")
);
