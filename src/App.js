import "./App.css";
import MyFirstComponent from "./componenets/myFirstComponent";
import MySecondComponent from "./componenets/mySecondComponent";

function App() {
  return (
    <div className="App">
      <h1>Hello Word</h1>

      <p>This is my first React JS Application</p>
      <MyFirstComponent />
      <MySecondComponent />
    </div>
  );
}

export default App;
