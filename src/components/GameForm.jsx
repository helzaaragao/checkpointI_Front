import {useState} from 'react'; 
import styles from '../css/GameForm.module.css'

export default function GameForm( { handleSubmit } ){ 
    const [gameName, setGameName] = useState(''); 
    const [gameImage, setGameImage] = useState([]); 
    const [gameHoras, setGameHoras] = useState();


    return(
        <form  onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.respostas}>
        <h3>Nome do jogo</h3>
        <input type="text" name="gameName"  placeholder="Digite o nome do jogo" 
        onChange={(event) => setGameName(event.target.value)} value={gameName}></input>
        </div>
       <div className={styles.respostas}>
       <h3>Url do jogo</h3>
        <input type="text" name="gameImage" placeholder="Insira a url/imagem do seu jogo"
         onChange={(event) => setGameImage(event.target.value)} value={gameImage}></input>
       </div>
        <div className={styles.respostas}>
        <h3>Horas jogadas</h3>
        <input type="number" name="gameHoras" placeholder="Quantas horas de gameplay você tem com esse jogo?"
        onChange={(event) => setGameHoras(event.target.value)} value={gameHoras}/>
        </div>
      
       

        <button type='submit'>ADICIONAR</button>
        
        
        </form>
    )
}