import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import TrackVisibility from 'react-on-screen'
import Chart from './Chart'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__profile">
          <Fade bottom>
            <h3>
              I'm a developer. A web developer. Responsive and cross-browser
              websites and web apps, that's what I do. I speak Portuguese,
              English and JavaScript. Front end and back end, I like them both.
              Team player. Guitar player. Pool player.
            </h3>
          </Fade>
        </div>
        <div className="about__skills">
          <TrackVisibility once partialVisibility>
            <Chart />
          </TrackVisibility>
        </div>
      </div>
    )
  }
}

export default About
