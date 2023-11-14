import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Display from "./components/Display";

function App() {
  return (
    <div>
      <div className="text-center ">
        {" "}
        <Display />
      </div>
      <Counter />
    </div>
  );
}

export default App;
