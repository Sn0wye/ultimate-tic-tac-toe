import Board from './Board'
import { useState, useEffect} from 'react'

function App() {

  const [game, setGame] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ])

  function updateGame (g) {
    setGame(g)
    console.log(g,game);
  }

  useEffect(() => {
    console.log(game);
    setGame(game);
  }, [game])

  return <div className="App">
    <Board game={game} setGame={updateGame} />
  </div>;
}

export default App;
