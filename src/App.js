import React, { useState, useEffect } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/todos/1";

const App = () => {
  const [value, setValue] = useState(null);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setValue(response.data);
    });
  }, []);

  if (!value) return null;
  return (
    <div>
      <h1>{value.title}</h1>
      <h2>{value.userId}</h2>
    </div>
  );
};

export default App;
