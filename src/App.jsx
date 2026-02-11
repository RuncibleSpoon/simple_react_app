import { useState } from 'react'
import './App.css'

const API_BASE = 'http://localhost:3001'

function App() {
  const [exploded, setExploded] = useState(false)
  const [pingHost, setPingHost] = useState('8.8.8.8')
  const [pingResult, setPingResult] = useState('')
  const [pingError, setPingError] = useState('')

  const runPing = async () => {
    setPingResult('')
    setPingError('')
    try {
      const res = await fetch(`${API_BASE}/api/ping`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ host: pingHost }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || res.statusText)
      setPingResult(data.output || '')
    } catch (e) {
      setPingError(e.message || 'Request failed')
    }
  }

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
          DO NOT PUSH. NEVER, EVER. OR ELSE!
        </button>
        {/* DEMO: Command-injection vuln - backend server.js passes user input to exec() */}
        <section className="ping-demo" style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #444', borderRadius: 8 }}>
          <h3 style={{ marginTop: 0 }}>Ping a host (demo – vuln for testing)</h3>
          <input
            type="text"
            value={pingHost}
            onChange={(e) => setPingHost(e.target.value)}
            placeholder="e.g. 8.8.8.8"
            style={{ marginRight: 8, padding: 6 }}
          />
          <button type="button" onClick={runPing} style={{ padding: 6 }}>Ping</button>
          {pingError && <div style={{ color: '#f88', marginTop: 8 }}>{pingError}</div>}
          {pingResult && <pre style={{ marginTop: 8, fontSize: 12, overflow: 'auto' }}>{pingResult}</pre>}
        </section>
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

