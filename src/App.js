import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import "./JS for react /var_const_let";
// import "./JS for react /this";
// import "./JS for react /self";
// import "./JS for react /class";
// import "./JS for react /spreadOperator";
// import "./JS for react /inheritance";
// import "./JS for lambda/await-async";
// import "./JS for lambda/promises";
import "./JS for lambda/try-catch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
