import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GetZip from "./features/zipcode/GetZip";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <GetZip />
      </header>
    </div>
  );
}

export default App;
