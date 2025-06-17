import { useState } from 'react';
export const Gameboard = () => {
  // will track player move and rendering
  const [board, updateBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.index, 'clicked')
  };

  return (
    <>
      <section id="gameboard-container">
        <div className="box" id="1" onClick={handleClick}>
          1
        </div>
        <div className="box" id="2">
          2
        </div>
        <div className="box" id="3">
          3
        </div>
        <div className="box" id="4">
          4
        </div>
        <div className="box" id="5">
          5
        </div>
        <div className="box" id="6">
          6
        </div>
        <div className="box" id="7">
          7
        </div>
        <div className="box" id="8">
          8
        </div>
        <div className="box" id="9">
          9
        </div>
      </section>
    </>
  );
};
