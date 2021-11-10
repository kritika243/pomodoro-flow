import { useState } from 'react'
import './App.css'
import Controls from './Controls'
import Timer from './Timer'

function App() {
  const [showControls, setShowControls] = useState(true)

  return <main>{showControls ? <Controls /> : <Timer />}</main>
}

export default App
