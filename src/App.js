import { useState } from 'react'
import './App.css'
import Controls from './Controls'
import SettingsContext from './SettingsContext'
import Timer from './Timer'

function App() {
  const [showControls, setShowControls] = useState(true)

  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes: 45,
          breakMinutes: 15,
        }}
      >
        {showControls ? <Controls /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default App
