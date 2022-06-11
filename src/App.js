import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    for (let index = 0; index < 10; index++) {
      setCounter((preCounter) => preCounter + 1);
    }
  };

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default App;
