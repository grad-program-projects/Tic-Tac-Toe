import { useState } from "react";
import Board from "../components/Board";

export default function Game() {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array(9).fill(null),
  ]);

  /**
   * use state - react hook that creates a state variable and a setter function
   * string null part- 2D array that holds the history of the game, where each element is an array representing the state of the board at a given move. Each inner array contains 9 elements, which can either be a string ("X" or "O") or null (empty square). T
   * The initial value is `[Array(9).fill(null)]` — an array containing one board state, which is 9 nulls. So history starts as `[[null, null, null, null, null, null, null, null, null]]`
   * so its like a list of snap shops, one per move 
   * move 0 - [[null, null, null, null, null, null, null, null, null]]
   * then move 1 - [[null, null, null, null, null, null, null, null, null], ["X", null, null, null, null, null, null, null, null]]
   * then move 2 - [[null, null, null, null, null, null, null, null, null], ["X", null, null, null, null, null, null, null, null], ["X", "O", null, null, null, null, null, null, null]]
   * and so on
   * this allows us to keep track of the entire history of the game and implement features like undoing moves or jumping to a specific move in the history.
   */

  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0; //takes the current move number and checks if it is even or odd. If the move number is even (0, 2, 4, etc.), it means it's "X"'s turn, so xIsNext will be true. If the move number is odd (1, 3, 5, etc.), it means it's "O"'s turn, so xIsNext will be false.
  //... is a spread operator, which unpacks the array returned by history.slice(0, currentMove + 1) and includes its elements in the new array nextHistory. This is used to create a new array that includes all the previous moves up to the current move, and then adds the nextSquares as the latest move in the history.
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: (string | null)[]) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      nextSquares,
    ];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    const description =
      move > 0 ? `Go to move #${move}` : "Go to game start";

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>
          {description}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>

      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
