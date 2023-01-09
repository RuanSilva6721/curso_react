
import './App.css';

import {useCallback, useEffect, useState} from "react";
import {wordsList} from './data/word';

import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},

];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("");
  const [lettrs, setLettrs] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = () =>{
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word = words[category][Math.floor(Math.random() *  words[category].length)];

    console.log(category, word);
    return {word, category};
  }

  const startGame =  () => {
      const {word, category} = pickWordAndCategory()

      let wordLetters = word.split("")
      wordLetters = wordLetters.map((l) => l.toLowerCase())

      console.log(category, word, wordLetters);
      setPickedWord(word);
      setPickedCategory(category);
      setLettrs(wordLetters);




    setGameStage(stages[1].name)

  }
  const verifyLetter = () =>{
    setGameStage(stages[2].name)
  }
  const retry = () =>{
    setGameStage(stages[0].name)
  }



  return (
    <div className="App">
        {gameStage === 'start' && <StartScreen startGame={startGame}/> }
        {gameStage === 'game' && 
        <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        lettrs={lettrs}
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
        /> } 

        {gameStage === 'end' && <GameOver retry={retry}/> }   
    </div>
  );
}

export default App;
