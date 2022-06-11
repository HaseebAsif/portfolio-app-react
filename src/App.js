import { useState } from "react";
import "./App.css";

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <div className="App">
      <h1>How About them Them Apples</h1>
      {submitting && <div>Submitting Form...</div>}
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="">
            <p>Name</p>
            <input type="text" name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
