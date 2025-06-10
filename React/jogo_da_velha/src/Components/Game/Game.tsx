import { useState } from "react";
import Board from "../Board/Board";
import styles from "./styles.module.css"

function Game() {
  const [history, setHistory] = useState<string[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: string[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_squares, move) => (
    <li key={move}>
      <button className={styles.btn_Game} onClick={() => jumpTo(move)}>
        {move > 0 ? `Go to move #${move}` : "Go to game start"}
      </button>
    </li>
  ));

  return (
    <div className={styles.game}>
      <div className={styles.game_board}>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className={styles.game_info}>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

export default Game;
