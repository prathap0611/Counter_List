import React from "react";
import "../styles.css";

function Counter(props) {
  return (
    <div className="App">
      <h1>{props.value}</h1>
      <button className="btn" onClick={props.increment}>
        Increment
      </button>
      <button className="btn" onClick={props.decrement}>
        Decrement
      </button>
    </div>
  );
}

export default Counter;
