import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="container">
      <h1>counter</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button
          type="button"
          className="btn"
          onClick={() => setCount(count - 1)}
        >
          decrease
        </button>
        <button type="button" className="btn" onClick={() => setCount(0)}>
          reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={() => setCount(count + 1)}
        >
          increase
        </button>
      </div>
    </div>
  );
}
