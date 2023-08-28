import styles from '../css/GameResult.module.css'

export default function GameResult({game}) { 
    return(
        <div className={styles.gameRContainer}>
            <img src={game.gameImage} className={styles.image} alt={`imagem do jogo escolhido ${game.gameImage}`}/>
            <div className={styles.text}>
            <h4>{game.gameName}</h4>
            <h5>Você jogou {game.gameHoras} hora{ game.gameHoras > 1 ? 's' : ''} </h5>
        </div>
            
        </div>
    )
}

 // opacity: 0.8; 
 // mensagem: prefivel horizontal