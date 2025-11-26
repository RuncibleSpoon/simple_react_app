import { useState } from 'react'
import './App.css'

function App() {
  const [exploded, setExploded] = useState(false)

  const handleClick = () => {
    setExploded(true)
    // Reset after animation completes
    setTimeout(() => {
      setExploded(false)
    }, 2500)
  }

  return (
    <div className="app">
      <div className="container">
        <button
          className={`exploding-button ${exploded ? 'explode' : ''}`}
          onClick={handleClick}
        >
          DO NOT PUSH
        </button>
        {exploded && (
          <div className="explosion">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

