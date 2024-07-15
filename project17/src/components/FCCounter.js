import React, { useEffect, useState } from "react";

function FCCounter() {
  let [score, setScore] = useState(0);
  let [wickets, setWickets] = useState(0);

  useEffect(() => {
    console.log(`FCCounter-loaded`);
  }, []);
  useEffect(() => {
    console.log(`FCCounter-Score changed`);
  }, [score]);
  useEffect(() => {
    console.log(`FCCounter-Wickets changed`);
  }, [wickets]);
  useEffect(() => {
    console.log(`FCCounter-Score/Wickets changed`);
  }, [score, wickets]);
  useEffect(() => {
    console.log(`FCCounter-Any StateVariable changed`);
  });
  useEffect(() => {
    return () => {
      console.log(`FCCouter-unloaded`);
    };
  }, []);
  return (
    <div className="counter">
        <h2>FC-Counter</h2>
      <h2>Score:{score}</h2>
      <h2>Wickets:{wickets}</h2>
      <button
        onClick={() => {
          setScore(score + 1);
        }}
      >
        Increment Score
      </button>
      <button
        onClick={() => {
          setScore(score - 1);
        }}
      >
        Decrement Score
      </button>
      <button
        onClick={() => {
          setWickets(wickets + 1);
        }}
      >
        Increment Wickets
      </button>
      <button
        onClick={() => {
          setWickets(wickets - 1);
        }}
      >
        Decrement Wickets
      </button>
    </div>
  );
}

export default FCCounter;
