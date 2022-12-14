import React from 'react'
import Wave from 'react-wavify'

const WaveComponent = () => (
    <Wave fill='url(#gradient)'
          paused={false}
          options={{
              height: 30,
              amplitude: 20,
              speed: 0.3,
              points: 5
          }}
    >
        <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="10%"  stopColor="#03DDFF" />
                <stop offset="90%" stopColor="#0000CF" />
            </linearGradient>
        </defs>
    </Wave>
)

export default WaveComponent
