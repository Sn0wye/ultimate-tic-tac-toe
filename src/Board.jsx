import './styles/Board.css';

const Board = ({ game, setGame }) => {

  function play(x,y) {
    console.log(x,y);
    let newGame = game;
    newGame[x][y] = 'x'
    setGame(newGame);
  }

  return ( 
    <div className="Board">
      { game &&game.map((row,x) => {
        return row.map((column,y) => (
        <div 
        className="cell" 
        key={`${x},${y}`}
        onClick={event => {
          play(x,y)
        }}
        >{column}
        </div>))
      })}
    </div>
   );
}
 
export default Board;