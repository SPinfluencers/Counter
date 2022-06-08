import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const handleIncrement = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Counter</h1>
      <h2> {count} </h2>
      <button onClick={() => handleIncrement(1)}>+</button>
      <button onClick={() => handleIncrement(-1)}>-</button>
    </div>
  );
};

export default Counter;
