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
  const [guess, setGuess] = useState("")
  const [feedback, setFeedback] = useState("")

  //next we need a function to generate a random index for the card to be displayed
  const nextCard = () => {
    // //random number
    // const randomIndex = Math.floor(Math.random() * flashcards.length)
    // //update index
    // if(randomIndex === currentCardIndex) {
    //   //if the random index is the same as the current index, we need to generate a new random index
    //   nextCard()
    // } else {
    // setCurrentCardIndex(randomIndex)
    // //reset the card to show the question when we go to the next card
    // setIsFlipped(false)
    // }
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setGuess("")
      setFeedback("")
      setIsFlipped(false)

    }
  }
  const previousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setGuess("")
      setFeedback("")
      setIsFlipped(false)
    }
  }

  const checkAnswer = () => {
    const correctAnswer = flashcards[currentCardIndex].answer

    if(guess.toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("Correct!")
    } else {
      setFeedback("Incorrect!")
    }
  }

  return (
    <div className="App">
      <h1>Welcome to Studying with Hadia!</h1>
      <p>Test Your Knowledge of European Capitals!</p>
      <p>Flashcard Count: {count}</p>

      <div className="flashcard" onClick={flipCard}>
        {isFlipped ? <p>{flashcards[currentCardIndex].answer}</p> :
        <p>{flashcards[currentCardIndex].question}</p>}
      </div>

      <input
        type="text"
        placeholder="Enter your guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
      />

      {/* <button onClick={nextCard}>
          Next
      </button> */}
      <button onClick={checkAnswer} disabled={isFlipped}>
        Submit Guess
      </button>

      <p>{feedback}</p>

      <div className="navigation">

        <button
          onClick={previousCard}
          disabled={currentCardIndex === 0}
        >
          Previous
        </button>

        <button
          onClick={nextCard}
          disabled={currentCardIndex === flashcards.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default App
