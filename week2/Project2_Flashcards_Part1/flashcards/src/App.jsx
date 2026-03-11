import { useState } from 'react'
import './App.css'

function App() {
  const flashcards = [
    {question: "What is the capital of France?", answer: "Paris"},
    {question: "What is the capital of Spain?", answer: "Madrid"},
    {question: "What is the capital of Italy?", answer: "Rome"},
    {question: "What is the capital of Germany?", answer: "Berlin"},
    {question: "What is the capital of Portugal?", answer: "Lisbon"}
  ]
  const count = flashcards.length
  //since the cards will change when we click next, we need to use state to keep track of the current card index
  const [currentCardIndex, setCurrentCardIndex] = useState(0)

  //we need to track whether the card is flipped or not, so we need another state variable for that
  const [isFlipped, setIsFlipped] = useState(false)

  //we need a function to change flip the cards when we click on it
  const flipCard = () => {
    setIsFlipped(!isFlipped)
  }
  //next we need a function to generate a random index for the card to be displayed
  const nextCard = () => {
    //random number
    const randomIndex = Math.floor(Math.random() * flashcards.length)
    //update index
    if(randomIndex === currentCardIndex) {
      //if the random index is the same as the current index, we need to generate a new random index
      nextCard()
    } else {
    setCurrentCardIndex(randomIndex)
    //reset the card to show the question when we go to the next card
    setIsFlipped(false)
    }
  }

  return (
    <div className="App">
      <h1>Test Your Knowledge of European Capitals!</h1>
      <p>Flashcard Count: {count}</p>

      <div className="flashcard" onClick={flipCard}>
        {isFlipped ? <p>{flashcards[currentCardIndex].answer}</p> :
        <p>{flashcards[currentCardIndex].question}</p>}
      </div>

      <button onClick={nextCard}>
          Next
      </button>

    </div>
  )
}

export default App
