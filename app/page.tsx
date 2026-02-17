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

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");
  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "O");
      const crossWins = combo.every((cell) => cells[cell] === "X");

      if (circleWins) {
        setWinningMessage("circle wins!");
      } else if (crossWins) {
        setWinningMessage("Cross wins!");
      }
    });
  }, [cells]);

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
            winningMessage={winningMessage}
          />
        ))}

        {!winningMessage ? <p>{go} to go</p> : ""}
        <p>{winningMessage} </p>
      </div>
    </main>
  );
}
