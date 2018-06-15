import React from 'react'
import Fade from 'react-reveal/Fade'
import TrackVisibility from 'react-on-screen'
import Chart from './Chart'

const About = () => (
  <div className="about">
    <Fade left>
      <div className="about__profile">
        <h3>
          I'm a developer. A web developer. From Brazil, now living in Ireland.
          I speak Portuguese, English and JavaScript. Front end and back end, I
          like them both. Team player. Guitar player. Pool player.
        </h3>
      </div>
    </Fade>
    <div className="about__skills">
      <TrackVisibility once partialVisibility>
        <Chart />
      </TrackVisibility>
    </div>
  </div>
)

export default About
