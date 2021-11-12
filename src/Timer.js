import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { useContext } from 'react'
import PauseBtn from './PauseBtn'
import PlayBtn from './PlayBtn'
import SettingsBtn from './SettingsBtn'
import SettingsContext from './SettingsContext'

const color1 = '#ffb30f'
const color2 = '#96cdff'

const Timer = () => {
  const settingsInfo = useContext(SettingsContext)
  return (
    <>
      <div>
        <CircularProgressbar
          value={62}
          text={`62%`}
          styles={buildStyles({
            rotation: 0.25,
            strokeLinecap: 'butt',
            textColor: 'white',
            pathColor: color1,
            trailColor: 'rgba(255, 255, 255, 0.562)',
          })}
        />
      </div>
      <div style={{ marginTop: '20px' }}>
        <PlayBtn />
        <PauseBtn />
      </div>
      <div style={{ marginTop: '20px' }}>
        <SettingsBtn
          onClick={() => {
            settingsInfo.setShowControls(true)
          }}
        />
      </div>
    </>
  )
}

export default Timer
