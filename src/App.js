import React from "react";
import Board from "./Board";

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Board />
      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click!
      </button>
    </div>
  );
}

export default App;
