import { useState } from 'react'
import './App.css'
import Controls from './Controls'
import SettingsContext from './SettingsContext'
import Timer from './Timer'

function App() {
  const [showControls, setShowControls] = useState(false)
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
          showControls,
          setShowControls,
        }}
      >
        {showControls ? <Controls /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  )
}

export default App
