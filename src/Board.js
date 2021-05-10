import React, { useEffect, useState, useMemo } from "react";
import { chunk } from "lodash";
import produce from "immer";
import "./Board.css";

function Board() {
  const [squares, setSquares] = useState([]);

  useEffect(() => {
    const squaresNew = [];
    for (var i = 0; i < 64; i++) {
      squaresNew.push({ selected: false });
    }
    setSquares(squaresNew);
  }, []);

  function squareCallback(i) {
    return () => {
      console.log("Click!");
      setSquares(
        produce((draft) => {
          draft[i].selected ^= 1;
        })
      );
    };
  }

  return useMemo(
    () =>
      chunk(
        squares.map(({ selected }, i) => (
          <Square
            x={i % 8}
            y={Math.floor(i / 8)}
            selected={selected}
            onClick={squareCallback(i)}
            key={i}
          />
        )),
        8
      ).map((row, i) => <Row key={i}>{row}</Row>),
    [squares]
  );
}

function Row({ children }) {
  return (
    <div className="Row">
      {children}
      <div className="clearfix" />
    </div>
  );
}

function Square({ x, y, selected, onClick }) {
  console.log("Render: Square!");
  const color = (x & 1) ^ (y & 1) ? "black" : "white";
  return (
    <div
      onClick={onClick}
      className={`Square ${color} ${selected ? "selected" : ""}`}
    ></div>
  );
}

export default Board;
