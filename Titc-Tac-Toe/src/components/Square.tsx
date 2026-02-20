type SquareProps = {
  value: string | null;
  onSquareClick: () => void; //returns nothing, just a function that gets called when the square is clicked
};

//{value, onsquareclick }- this is called object destructuring, 
// which allows us to extract the value and onSquareClick properties from the props object and use them directly in the component 
// without having to reference props.value and props.onSquareClick each time.
export default function Square({ value, onSquareClick }: SquareProps) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
