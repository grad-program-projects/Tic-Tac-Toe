
//its called a union type, which means that each value can either be a string("X" | "O")
//or null (empty square)
//[]-MEANING ITS AN ARRAY 
//SO BASICALLY, WHAT ITS SAYING IS THE WHOLE FUNCTION ACECEPS ne parameter called squares 
//which must be an array of 9 elements, where each element can either be a string ("X" or "O") or null (empty square).
export function calculateWinner(squares: (string | null)[]) {
  //this here holds all the winning combinations 
  //its typed as a 2d array - [][] - because its an array of arrays, where each inner array represents a winning combination of square indices on the tic-tac-toe board.
  const lines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

/** - basically what the above is
0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8
 */

  for (let i = 0; i < lines.length; i++) { //looping through each winning combination in the lines array
    const [a, b, c] = lines[i];
    //the above line is using array destructuring to assign the values of the current winning combination (lines[i]) to the variables a, b, and c.
    //so insteade of writing const a = lines[i][0], const b = lines[i][1], and const c = lines[i][2]

    if (
      squares[a] && //square is not null
      squares[a] === squares[b] &&// sqare 1 and 2 are equal
      squares[a] === squares[c]// square 1 and 3 are equal
    ) {
      return squares[a];
    }
  }

  return null;
}
