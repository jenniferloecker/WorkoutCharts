import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import MainDisplay from "./MainDisplay";

function App() {
  const state = useSelector((state) => state);
  const { message } = state;

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
      </header>
      <MainDisplay />
    </div>
  );
}

export default App;
