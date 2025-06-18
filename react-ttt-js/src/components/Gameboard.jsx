import { useState } from 'react';
import { Square } from './Square';
export const Gameboard = () => {
  const [board, updateBoard] = useState(Array(9).fill(null));
  const [XisNext, setXNext] = useState(true);

  function handleClick(i) {
    const nextSquares = board.slice();
    if (board[i]) return;
    if (XisNext) {
      nextSquares[i] = 'X';
      setXNext(false);
    } else {
      nextSquares[i] = '0'
      setXNext(true);
    }

    updateBoard(nextSquares);
  }

  return (
    <>
      <div className="board-row">
        <Square value={board[0]} onSqClick={() => handleClick(0)} />
        <Square value={board[1]} onSqClick={() => handleClick(1)} />
        <Square value={board[2]} onSqClick={() => handleClick(2)} />
        <Square value={board[3]} onSqClick={() => handleClick(3)} />
        <Square value={board[4]} onSqClick={() => handleClick(4)} />
        <Square value={board[5]} onSqClick={() => handleClick(5)} />
        <Square value={board[6]} onSqClick={() => handleClick(6)} />
        <Square value={board[7]} onSqClick={() => handleClick(7)} />
        <Square value={board[8]} onSqClick={() => handleClick(8)} />
      </div>
    </>
  );
};
