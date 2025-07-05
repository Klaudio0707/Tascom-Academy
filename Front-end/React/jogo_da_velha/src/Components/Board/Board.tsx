import Square from "../Square/Square";
import styles from "./styles.module.css"

interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
}

function Board({ xIsNext, squares, onPlay }: BoardProps) {
  function handleClick(i: number) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = [...squares];
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);

const isBoardFull = squares.every(Boolean);

const status = winner
  ? `Vencedor: ${winner}`
  : isBoardFull
    ? "Empate!"
    : `Próximo Jogador: ${xIsNext ? "X" : "O"}`;

  return (
    <>
      <div className={styles.titulo_status}><span className={styles.status}>{status}</span></div>
      {[0, 1, 2].map((row) => (
        <div className={styles.board_row} key={row}>
          {[0, 1, 2].map((col) => {
            const index = row * 3 + col;
            return (
              <Square
              key={index}
              value={squares[index]}
                onSquareClick={() => handleClick(index)}
                />
              );
            })}
        </div>
      ))}
     
    </>
  );
}

export default Board;

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  
  return null;
}
