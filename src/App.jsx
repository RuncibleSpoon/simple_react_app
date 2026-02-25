import { useState } from 'react'
import './App.css'

function App() {
  const [exploded, setExploded] = useState(false)

  const handleClick = () => {
    setExploded(true)
    // Reset after animation completes
    setTimeout(() => {
      setExploded(false)
    }, 5000)
  }

  return (
    <div className="app">
      <div className="container">
        <h1 className="demo-title">Vibe Code Demo</h1>
        <button
          className={`exploding-button ${exploded ? 'explode' : ''}`}
          onClick={handleClick}
        >
          DO NOT PUSH. NEVER, EVER. OR ELSE!
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
            <div className="particle"></div>
          </div>
        )}
      </div>
    </div>
  )
}
// add a comment to change the file 
export default App

