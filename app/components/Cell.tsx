import React, { Dispatch, SetStateAction } from "react";

type CellProps = {
  go: string;
  id: number;
  cells: string[];
  cell: string;
  winningMessage: string;
  setCells: Dispatch<SetStateAction<string[]>>;
  setGo: Dispatch<SetStateAction<string>>;
};

export default function Cell({
  go,
  id,
  setGo,
  cell,
  cells,
  setCells,
  winningMessage,
}: CellProps) {
  const handleClick = () => {
    if (winningMessage) return;
    const cellsCopy = [...cells];
    console.log(go);
    if (cells[id] === "") {
      if (go === "circle") {
        cellsCopy[id] = "O";
        console.log(id, cellsCopy[id]);
        setGo("cross");
      } else {
        cellsCopy[id] = "X";
        setGo("circle");
      }
      setCells(cellsCopy);
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      <div className={cell === "X" ? "cross" : "circle"}>{cell}</div>
    </div>
  );
}
