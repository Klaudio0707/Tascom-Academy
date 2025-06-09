import Square from "../Square/Square"


function Board() {
    return (
        <>
            <section className="board-row">
                <Square value="1" />
                <Square value="2" />
                <Square value="3" />
            </section>
            <section className="board-row">
                <Square value="4" />
                <Square value="5" />
                <Square value="6" />
            </section>
            <section className="board-row">
                <Square value="7" />
                <Square value="8" />
                <Square value="9" />
            </section>
        </>
    )
}

export default Board
