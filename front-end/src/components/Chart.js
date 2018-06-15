import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class Charts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scaleY: undefined,
    }
  }

  componentDidMount() {
    const checkVisibility = setInterval(() => {
      if (this.props.isVisible) {
        this.setState({ scaleY: 1 })
        clearInterval(checkVisibility)
      }
    }, 500)
  }

  render() {
    const skills = [
      { skillName: 'JS', level: 10, color: 'bca538', scaleY: 0.5 },
      { skillName: 'HTML', level: 9, color: 'af4336', scaleY: 0.3 },
      { skillName: 'React', level: 8, color: '4c9dc7', scaleY: 1.2 },
      { skillName: 'CSS', level: 8, color: '2f81b7', scaleY: 0.8 },
      { skillName: 'Redux', level: 7, color: 'a87cd8', scaleY: 0.9 },
      { skillName: 'Git', level: 7, color: '89321f', scaleY: 1.3 },
      { skillName: 'Node', level: 6, color: '779643', scaleY: 0.8 },
    ]

    return (
      <div className="chart">
        <Fade>
          <div className="chart__bars">
            {skills.map((skill, index) => {
              const { skillName, level, color, scaleY } = skill

              return (
                <div
                  className="chart__bars__item"
                  key={skillName}
                  style={{
                    background: `#${color}`,
                    height: `${10 * level}%`,
                    transform: `scaleY(
                    ${this.state.scaleY ? this.state.scaleY : scaleY}
                  )`,
                    width: `${100 / skills.length * (index + 1)}%`,
                    zIndex: skills.length - index,
                  }}
                >
                  <h4>{skillName}</h4>
                </div>
              )
            })}
          </div>
        </Fade>
      </div>
    )
  }
}

export default Charts
