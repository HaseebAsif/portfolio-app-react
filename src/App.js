import "./App.css";
import MyFirstComponent from "./componenets/myFirstComponent";
import MySecondComponent from "./componenets/mySecondComponent";

function App() {
  const centerDiv = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    height: "100vh",
  };

  const header = {
    backgroundColor: "yellow",
  };

  return (
    <div className="App" style={centerDiv}>
      <h1 className="app-heading">Hello World</h1>

      <p style={{ color: "red" }} className="paragraph">
        This is my first React JS Application
      </p>
      <div style={header}>
        <MyFirstComponent />
        <MySecondComponent />
      </div>
    </div>
  );
}

export default App;
