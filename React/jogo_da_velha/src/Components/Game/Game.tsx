import Board from "../Board/Board"



function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];*
  return (
    <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <div className="game-info">
      <ol>{/*TODO*/}</ol>
    </div>
  </div>
  )
}

export default Game
