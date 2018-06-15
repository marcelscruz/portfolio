import React from 'react'
import Fade from 'react-reveal/Fade'

const Menu = () => (
  <Fade top>
    <div className="menu">
      <div className="logo" />
      <li className="menu__list">
        <ul>About</ul>
        <ul>Experience</ul>
        <ul>Contact</ul>
      </li>
    </div>
  </Fade>
)

export default Menu
