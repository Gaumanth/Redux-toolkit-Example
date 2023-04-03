import React from "react";
import "./Counter.css";
import { counterActions } from "../Store";
import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispach = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const incrementHandler = () => {
    dispach(counterActions.increment());
  };
  const decrementHandler = () => {
    dispach(counterActions.decrement());
  };
  const increment5 = () => {
    dispach(counterActions.increment5(5));
  };
  const toggle = () => {
    dispach(counterActions.toggle());
  };
  const resetHandler = () => {
    dispach(counterActions.reset());
  };
  return (
    <div className="content">
      {showCounter && <h1>{counter}</h1>}
      <div className="buttons">
        <button className="increment" onClick={incrementHandler}>
          Increment
        </button>
        <button className="decrement" onClick={decrementHandler}>
          Decrement
        </button>
        <button className="increment5" onClick={increment5}>
          Increment 5
        </button>
        <button className="reset" onClick={resetHandler}>
          Reset
        </button>
      </div>
      <button
        className="toggle"
        style={{ fontSize: "2.5rem", marginTop: "100px", width: "30%" }}
        onClick={toggle}
      >
        Toggle
      </button>
    </div>
  );
};

export default Counter;
