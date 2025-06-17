import { useState } from 'react';
import { Counter } from './Counter';
export const Gameboard = () => {
  const [board, updateBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const handleClick = (index) => {
    if (board[index]) return;

    const newBoard = [...board];

    newBoard[index] = player;

    updateBoard(newBoard);

    console.log(newBoard);
    // Handle winning
    const winnerCheck = checkWinner(newBoard);

    if (winnerCheck === 'Draw') {
      console.log('was a draw');
      setWinner(null);
      updateBoard(Array(9).fill(null));
    }

    if (winnerCheck) {
      setWinner(winnerCheck);
      //reset board
      updateBoard(Array(9).fill(null));
    }

    if (player === 'X') {
      setPlayer('O');
    } else if (player === 'O') {
      setPlayer('X');
    }
  };

  const checkWinner = (board) => {
    const winningCombos = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal from top-left
      [2, 4, 6], // Diagonal from top-right
    ];

    for (let [a, b, c] of winningCombos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(board[a], 'winner');
        return board[a];
      }
    }
    if (board.every((cell) => cell !== null)) {
      setWinner('Draw');
    }

    return null;
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
      <Counter winner={winner}></Counter>
    </section>
  );
};
