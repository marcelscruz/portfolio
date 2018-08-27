import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class Charts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scale: undefined,
    }
  }

  componentDidMount() {
    const checkVisibility = setInterval(() => {
      if (this.props.isVisible) {
        this.setState({ scale: 1 })
        clearInterval(checkVisibility)
      }
    }, 500)
  }

  render() {
    const skills = [
      { skillName: 'JavaScript', level: 10, color: 'bca538' },
      { skillName: 'HTML', level: 9, color: 'af4336' },
      { skillName: 'CSS', level: 9, color: '2f81b7' },
      { skillName: 'React', level: 9, color: '4c9dc7' },
      { skillName: 'Redux', level: 9, color: 'a87cd8' },
      { skillName: 'Node.js', level: 8, color: '779643' },
      { skillName: 'MongoDB', level: 8, color: '499f50' },
      { skillName: 'Git', level: 8, color: '89321f' },
      { skillName: 'Firebase', level: 7, color: 'fac34b' },
      { skillName: 'AWS', level: 7, color: 'e38b33' },
    ]

    return (
      <div className="chart">
        <Fade>
          <div className="chart__bars">
            {skills.map((skill, index) => {
              const { skillName, level, color } = skill
              const { scale } = this.state

              return (
                <div
                  className={`chart__bars__item ${scale && 'grow'}`}
                  key={skillName}
                  style={{
                    background: `#${color}`,
                    height: `${(100 / skills.length) * (index + 1)}%`,
                    width: `${scale ? level * 10 : 0}%`,
                    zIndex: skills.length - index,
                  }}
                >
                  <h4
                    style={{
                      opacity: `${scale ? 1 : 0}`,
                    }}
                  >
                    {skillName}
                  </h4>
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
