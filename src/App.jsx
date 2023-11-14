import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Display from "./components/Display";
import HeaderApp from "./components/HeaderApp";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <div className="text-center ">
        <HeaderApp />
        <Message />
        <Display />
      </div>
      <Counter />
    </div>
  );
}

export default App;
