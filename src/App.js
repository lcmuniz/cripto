import './App.css';
import { useRef, useState } from 'react';

let number = Math.trunc(Math.random() * 100)

function App() {

  const [message, setMessage] = useState('')
  const [atempts, setAtempts] = useState(0)

  const guessInput = useRef()
  const guessButton = useRef()
  const restartLink = useRef()

  const testGuess = () => {
    const guess = Number(guessInput.current.value) 
    if (guess < number) {
      setMessage('Seu palpite é muito pequeno!')
    }
    else if (guess > number) {
      setMessage('Seu palpite é muito grande!')
    }
    else {
      setMessage('Você acertou!')
      restartLink.current.className = "restart visible"
      guessButton.current.disabled = 'true'
      guessInput.current.disabled = true
    }
    setAtempts(atempts + 1)
  }

  const restart = () => {
    setAtempts(0)
    number = Math.trunc(Math.random() * 100)
    guessInput.current.value = ''
    restartLink.current.className = "restart invisible"
    guessButton.current.disabled = false
    guessInput.current.disabled = false
  }

  return (
    <div className="container">
      <p class="prompt">Adivinhe o número que eu estou pensando?</p>
      <div className="form">
        <input type="text" ref={guessInput} />
        <button ref={guessButton} onClick={testGuess}>Enviar</button>
      </div>
      <span>{message}</span>
      <a ref={restartLink} className="restart invisible" href="#" onClick={restart}>Clique aqui para reiniciar.</a>
      <p>Número de tentativas: {atempts}</p>
    </div>
  );
}

export default App;
