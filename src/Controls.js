import React from 'react'
import ReactSlider from 'react-slider'
import { useContext } from 'react'
import SettingsContext from './SettingsContext'
import './slider.css'

const Controls = () => {
  const controlsInfo = useContext(SettingsContext)
  return (
    <div style={{ textAlign: 'left' }}>
      <label>Work: {controlsInfo.workMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={controlsInfo.workMinutes}
        onChange={(newValue) => controlsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />

      <label>Break: {controlsInfo.breakMinutes}:00 </label>
      <ReactSlider
        className={'slider blue'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={controlsInfo.breakMinutes}
        onChange={(newValue) => controlsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
    </div>
  )
}

export default Controls
