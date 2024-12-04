import React, { useEffect, useState, useRef } from "react";

const Stopwatch = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);

  const handleRestart = () => {
    setTime(0);
    setIsRunning(false);
    clearInterval(intervalId.current);
  };

  const handleStart = () => {
    setIsRunning((prev) => !prev);
  };

  useEffect(() => {
    if (isRunning) {
      intervalId.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(intervalId.current);
    }

    // Cleanup on component unmount or when isRunning changes
    return () => clearInterval(intervalId.current);
  }, [isRunning]);

  return (
    <div>
      <h1>Stopwatch App</h1>
      <h1>{time}</h1>
      <br />
      <button onClick={handleStart}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={handleRestart}>Reset</button>
    </div>
  );
};

export default Stopwatch;
