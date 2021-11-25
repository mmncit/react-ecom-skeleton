import React from "react";
import "./App.css";

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

function App() {
  return (
    <div className="App">
      <Header name="Mohabbatie" />
      <Main />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
