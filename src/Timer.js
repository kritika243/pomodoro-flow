import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import PauseBtn from './PauseBtn'
import PlayBtn from './PlayBtn'

const color1 = '#ffb30f'
const color2 = '#96cdff'

const Timer = () => {
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
    </>
  )
}

export default Timer
