import './styles/Board.css';

const game = [
  [null, null, 'x'],
  [null, 'x', null],
  [null, null, null]
]

const Board = () => {
  return ( 
    <div className="Board">
      {game.map((row) => {
        return row.map(column => (
        <div 
        className="cell" >{column}
        </div>))
      })}
    </div>
   );
}
 
export default Board;