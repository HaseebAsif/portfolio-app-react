import React from "react";
import "./myFirstComponent.css";

const MyFirstComponent = ({ name, description }) => {
  return (
    <div>
      <h1 className="component-heading">
        This is my First Ever React JS Component
      </h1>
      <h2>
        Coding starts here by {name} {description}
      </h2>
    </div>
  );
};

export default MyFirstComponent;
