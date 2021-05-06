import React from "react";
import "./Board.css";

function Board() {
  const rows = React.useMemo(() => {
    const rows = [];
    for (var x = 0; x < 8; x++) {
      rows.push(<Row key={x} x={x} />);
    }
    return rows;
  }, []);
  return <div className="Board">{rows}</div>;
}

function Row({ x }) {
  const squares = React.useMemo(() => {
    const squares = [];
    for (var y = 0; y < 8; y++) {
      squares.push(<Square key={`${x} ${y}`} x={x} y={y} />);
    }
    return squares;
  }, [x]);
  return (
    <div className="Row">
      {squares}
      <div className="clearfix"></div>
    </div>
  );
}

function Square({ x, y }) {
  const color = (x & 1) ^ (y & 1) ? "black" : "white";
  const [selected, setSelected] = React.useState(false);
  return (
    <div
      onClick={() => setSelected(selected ^ 1)}
      className={`Square ${color} ${selected ? "selected" : ""}`}
    ></div>
  );
}

export default Board;
