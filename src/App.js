import { useState } from "react";
import "./App.css";

function App() {
  const [bgColor, setBgColor] = useState("red");

  const turnGreen = () => {
    setBgColor("green");
  };
  const reset = () => {
    setBgColor("red");
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      {bgColor === "green" ? (
        <p>Color is now green</p>
      ) : (
        <p>Color is now Red</p>
      )}
      <button onClick={turnGreen}>Click me</button>
      {bgColor === "green" && <button onClick={reset}>Reset</button>}
    </div>
  );
}

export default App;
