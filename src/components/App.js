import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  // write your code here
  let [count, setCount] = useState("");
  let [value, setValue] = useState("");
  let data;
  let handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      console.log(value);
      if (isNaN(parseInt(value)) || parseInt(value) <= 0) {
        setCount(0);
      } else setCount(parseInt(value));
    }
  };
  useEffect(() => {
    console.log("call");
    if (count > 0)
      data = setInterval(() => {
        setCount(count - 1);
      }, 1000);
    return () => {
      clearInterval(data);
    };
  }, [count]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={handleKeyDown}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  );
};

export default App;
