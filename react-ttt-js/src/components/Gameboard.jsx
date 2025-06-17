import { useState } from 'react';
export const Gameboard = () => {
  const [board, updateBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');

  const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = player;
    updateBoard(newBoard);

    if (player === 'X') {
      setPlayer('O');
    } else if (player === 'O') {
      setPlayer('X');
    }
  };

  return (
    <section className="gameboard-container">
      {board.map((cell, index) => {
        return (
          <div key={index} className="box" onClick={() => handleClick(index)}>
            {cell}
          </div>
        );
      })}
    </section>
  );
};
