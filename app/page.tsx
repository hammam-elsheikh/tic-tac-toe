"use client";
import { useEffect, useState } from "react";
import Cell from "./components/Cell";

const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const random = Math.round(Math.random()) ? "circle" : "cross";

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [winningMessage, setWinningMessage] = useState("");
  const [count, setCount] = useState(0);
  const [reset, setReset] = useState(0);
  const [go, setGo] = useState(random);

  function resetGame() {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo(random);
    setWinningMessage("");
    setCount(0);
  }

  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "O");
      const crossWins = combo.every((cell) => cells[cell] === "X");

      if (circleWins) {
        setWinningMessage("circle wins!");
      } else if (crossWins) {
        setWinningMessage("Cross wins!");
      } else if (!winningMessage && count === 9) {
        setWinningMessage("Draw!");
      }
    });
    console.log("rerendered");
  }, [cells, count, winningMessage, reset]);

  return (
    <main>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            id={index}
            key={index}
            go={go}
            setGo={setGo}
            cells={cells}
            cell={cell}
            setCells={setCells}
            count={count}
            setCount={setCount}
            winningMessage={winningMessage}
          />
        ))}

        {!winningMessage ? <p>{go} to go</p> : ""}
        <p>{winningMessage} </p>
      </div>
      <button onClick={resetGame}>reset</button>
    </main>
  );
}
