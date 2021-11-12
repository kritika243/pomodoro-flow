import { useState } from 'react'
import './App.css'
import Controls from './Controls'
import SettingsContext from './SettingsContext'
import Timer from './Timer'

function App() {
  const [showControls, setShowControls] = useState(true)
  const [workMinutes, setWorkMinutes] = useState(45)
  const [breakMinutes, setBreakMinutes] = useState(15)
  return (
    <main>
      <SettingsContext.Provider
        value={{
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showControls ? <Controls /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default App
