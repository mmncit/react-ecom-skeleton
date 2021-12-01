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

function Main(props: { dishes: string[] }) {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li>{dish}</li>
        ))}
      </ul>
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

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables",
  "Minestrone",
];

dishes.map((dish) => console.log());

function App() {
  return (
    <div className="App">
      <Header name="Mohabbatie" />
      <Main dishes={dishes} />
      <BasicTooltip />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
