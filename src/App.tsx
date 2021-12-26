import "./App.css";
import * as React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import { useStyles } from "./App.styles";
import intro from "./res/intro.jpg";
import { Counter } from "./Counter";
import { ReduxApp } from "./ReduxApp";

function Header(props: { name: string }) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props: { dishes: Dish[] }) {
  return (
    <section>
      <p>We serve the most delicious food around.</p>
      <img src={intro} alt="places and glasses" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
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

interface Dish {
  id: number;
  title: string;
}

const dishObjects: Dish[] = dishes.map((dish, i) => ({ id: i, title: dish }));

function App() {
  return (
    <div className="App">
      <Counter />
      <ReduxApp />
    </div>
  );
}

export default App;
