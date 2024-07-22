import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return <Counter />;
}
export default App;

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Simple Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

