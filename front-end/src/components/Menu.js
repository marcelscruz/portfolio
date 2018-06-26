import React from 'react'
import Fade from 'react-reveal/Fade'

const Menu = props => (
  <Fade top>
    <div className="menu">
      <div className="logo" />
      <li className="menu__list">
        <ul>
          <button
            className="menu__button"
            onClick={() => {
              props.scrollPage('About')
            }}
          >
            About
          </button>
        </ul>
        {/* <ul>About</ul> */}
        <ul>Experience</ul>
        <ul>Contact</ul>
      </li>
    </div>
  </Fade>
)

export default Menu
