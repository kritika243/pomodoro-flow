import React from 'react'
import ReactSlider from 'react-slider'
import './slider.css'

const Controls = () => {
  return (
    <div style={{ textAlign: 'left' }}>
      <label>Work for how many minutes?</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={45}
        min={1}
        max={120}
      />

      <label>Need a break for few minutes ?</label>
      <ReactSlider
        className={'slider blue'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={45}
        min={1}
        max={120}
      />
    </div>
  )
}

export default Controls
