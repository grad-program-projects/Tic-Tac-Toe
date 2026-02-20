import Square from "./Square"; //export default - only one export per file, and you can import it with any name you want
import { calculateWinner } from "../utils/calculateWinner";// export function - you can have multiple exports per file, but you have to import them with the same name as the function or variable that was exported

type BoardProps = {
  xIsNext: boolean; // boolean - true or false, indicates whether the next player is "X" or "O"
  squares: (string | null)[]; //current state of the board, which is an array of 9 elements, where each element can either be a string ("X" or "O") or null (empty square)
  onPlay: (nextSquares: (string | null)[]) => void; //receives next board stae and returns nothing
};

export default function Board({ xIsNext, squares, onPlay }: BoardProps) {
//same as square, destructuring the props object to extract the xIsNext, squares, and onPlay properties and use them directly in the component without having to reference props.xIsNext, props.squares, and props.onPlay each time.
  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const nextSquares = squares.slice();
    // crates a copy of the squares array using the slice() method. This is important because we want to avoid mutating the original squares array directly, as it can lead to unexpected behavior in React. By creating a new array, we can safely update the state without affecting the previous state.
    nextSquares[i] = xIsNext ? "X" : "O"; //then sets clicked index to x or o
    onPlay(nextSquares); //dep on whose turn- passes new array to game via onplay
  }

  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else if (!winner && !squares.includes(null)) {
    status = "It's a tie";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
//each square is rendered by passing the value of the corresponding index in the squares array and an onSquareClick function that calls handleClick with the index of the square when it is clicked. This allows each square to update its value and trigger a re-render of the board when clicked.
  return (
    <>
      <div className="status">{status}</div>

      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
