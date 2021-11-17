import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useContext, useState, useEffect, useRef } from 'react'
import PauseBtn from './PauseBtn'
import PlayBtn from './PlayBtn'
import SettingsBtn from './SettingsBtn'
import SettingsContext from './SettingsContext'

const color1 = '#ffb30f'
const color2 = '#96cdff'

const Timer = () => {
  const controlsInfo = useContext(SettingsContext)
  const [isPaused, setIsPaused] = useState(false)
  const [mode, setMode] = useState('work') // work / break / null
  const [secondsLeft, setSecondsLeft] = useState(0)

  const secondsLeftRef = useRef(secondsLeft)
  const isPausedRef = useRef(isPaused)
  const modeRef = useRef(mode)

  function tick() {
    secondsLeftRef.current = secondsLeftRef.current - 1
    setSecondsLeft(secondsLeftRef.current - 1)
  }

  function switchMode() {
    const nextMode = modeRef === 'work' ? 'break' : 'work'
    const nextSeconds =
      nextMode === 'work'
        ? controlsInfo.workMinutes * 60
        : controlsInfo.breakMinutes * 60
    setMode(nextMode)
    modeRef.current = nextMode
    setSecondsLeft(nextSeconds)
    secondsLeftRef.current = nextSeconds
  }

  function initTimer() {
    setSecondsLeft(controlsInfo.workMinutes * 60)
  }

  useEffect(() => {
    initTimer()

    const interval = setInterval(() => {
      if (isPausedRef.current) return
      if (secondsLeftRef.current === 0) {
        return switchMode()
      }
      tick()
    }, 1000)

    return () => clearInterval(interval)
  }, [controlsInfo])

  const totalSeconds =
    mode === 'work'
      ? controlsInfo.workMinutes * 60
      : controlsInfo.breakMinutes * 60
  const percentage = Math.round((secondsLeft / totalSeconds) * 100)

  const minutes = Math.floor(secondsLeft / 60)
  let seconds = secondsLeft % 60
  if (seconds < 10) seconds = '0' + seconds

  return (
    <>
      <div>
        <CircularProgressbar
          value={percentage}
          text={minutes + ':' + seconds}
          styles={buildStyles({
            textColor: 'white',
            pathColor: mode === 'work' ? color1 : color2,
            trailColor: 'rgba(255, 255, 255, 0.562)',
          })}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        {isPaused ? <PlayBtn /> : <PauseBtn />}
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsBtn
          onClick={() => {
            controlsInfo.setShowControls(true)
          }}
        />
      </div>
    </>
  )
}

export default Timer
