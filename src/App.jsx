import { useState } from 'react'
import styles from './css/App.module.css'
import GameForm  from './components/GameForm'
import GameResult from './components/GameResult'

function App() {
  const [gamesList, setGamesList] = useState([]); 
  const [error, setError] = useState(''); 
  const [isError, setIsError] = useState(false);
 
  const lidandoComSubmit = (event) => { 
    event.preventDefault(); 
    const formData = new FormData(event.target); 
    const game = Object.fromEntries(formData);

    if (game.gameName.length > 3 && game.gameImage.length > 6 && game.gameHoras >= 1 ){ 
      setGamesList([...gamesList, game]);  
      setIsError(false);
      setError('');
    } else {  
      setIsError(true);
      setError("Por favor, verifique os dados inseridos no formulário")
    }
  }

  return (
    <main className={styles.main}>

       <h1 className={styles.titulo}>ADICIONE JOGOS</h1>
       <GameForm handleSubmit={lidandoComSubmit}></GameForm>
       {isError && <p className={styles.error}>{error}</p>}

       <section>
        <h2 className={styles.tituloSecundario}>Jogos Adicionados</h2>
        <div className={styles.cardsGames}>
        {gamesList && (
            gamesList.map((game, keyNumber) => {
              return (
                <GameResult key={keyNumber} game={game}/>
              )
            })
          )}
        </div>
       </section>
    </main>
  )
}

export default App
