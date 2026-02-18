import React, { Dispatch, SetStateAction } from "react";

type CellProps = {
  go: string;
  id: number;
  cells: string[];
  cell: string;
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
  winningMessage: string;
  setCells: Dispatch<SetStateAction<string[]>>;
  setGo: Dispatch<SetStateAction<string>>;
};

export default function Cell({
  go,
  id,
  setGo,
  count,
  setCount,
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
      setCount(count + 1);
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
      <div className="cell">{cell}</div>
    </div>
  );
}
