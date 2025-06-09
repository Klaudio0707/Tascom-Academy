import { useState } from "react";
import Square from "../Square/Square"


function Board() {
        const [squares, setSquares] = useState(Array(9).fill(null));
    return (
        <>
            <section className="board-row">
                <Square value={squares[0]} />
                <Square value={squares[1]} />
                <Square value={squares[2]} />
            </section>
            <section className="board-row">
                <Square value={squares[3]} />
                <Square value={squares[4]} />
                <Square value={squares[5]} />
            </section>
            <section className="board-row">
                <Square value={squares[6]} />
                <Square value={squares[7]} />
                <Square value={squares[8]} />
            </section>
        </>
    )
}

export default Board
