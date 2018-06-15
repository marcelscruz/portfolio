import React from 'react'
import Fade from 'react-reveal/Fade'

const Welcome = () => (
  <div className="welcome">
    <div className="welcome__content">
      <Fade>
        <div className="title">
          <h1>
            I<span className="title--highlight">'</span>m
          </h1>
          <h1>Marcel</h1>
          <h1>
            Cruz<span className="title--highlight">.</span>
          </h1>
          <h2>Web Developer</h2>
        </div>
      </Fade>
    </div>
    <Fade right>
      <div className="welcome__picture" />
    </Fade>
  </div>
)

export default Welcome
