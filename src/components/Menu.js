import React from 'react'
import Fade from 'react-reveal/Fade'

const Menu = props => (
  <Fade top>
    <div className="menu">
      <div
        className="logo"
        onClick={() => {
          props.scrollPage('Welcome')
        }}
      />
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
        <ul>
          <button
            className="menu__button"
            onClick={() => {
              props.scrollPage('Experience')
            }}
          >
            Experience
          </button>
        </ul>
        <ul>
          <button
            className="menu__button"
            onClick={() => {
              props.scrollPage('Contact')
            }}
          >
            Contact
          </button>
        </ul>
      </li>
    </div>
  </Fade>
)

export default Menu
