import "./App.css";
import * as React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { useStyles } from "./App.styles";

function Header(props: { name: string }) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main() {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
    </section>
  );
}

function Footer(props: { year: number }) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

function BasicTooltip() {
  const classes = useStyles();
  return (
    <Tooltip
      title="See the food menu"
      classes={{ tooltip: classes.tooltipStyle }}
    >
      <IconButton>Visit us</IconButton>
    </Tooltip>
  );
}

function App() {
  return (
    <div className="App">
      <Header name="Mohabbatie" />
      <Main />
      <BasicTooltip />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
