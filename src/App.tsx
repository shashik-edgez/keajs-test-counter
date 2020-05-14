import "./styles.css";

import React from "react";
import { useActions, useValues } from "kea";

import counterLogic from "./logic";

export default function App() {
  const { counter, doubleCounter } = useValues(counterLogic);
  const { increment, decrement } = useActions(counterLogic);

  return (
    <div className="app">
      <h1>Simple Even or Odd finder counter  </h1>
      <div className="kea-counter">
        Count: <h2>{counter}</h2>
        <br />
        Is it Even or Odd : <h2>{doubleCounter}</h2>
        <br />
        <button onClick={() => increment(1)}>Increment</button>
        <button onClick={() => decrement(1)}>Decrement</button>
      </div>
    </div>
  );
}
