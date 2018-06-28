import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'

// ********** COMPONENTS ********** //
import Menu from './components/Menu'
import Welcome from './components/Welcome'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

class App extends Component {
  scrollPage = component => {
    scrollToComponent(this[component], { offset: -45, align: 'top' })
  }

  render() {
    return (
      <div className="app">
        <Menu scrollPage={this.scrollPage} />
        <Welcome
          ref={section => {
            this.Welcome = section
          }}
        />
        <About
          ref={section => {
            this.About = section
          }}
        />
        <Experience
          ref={section => {
            this.Experience = section
          }}
        />
        <Contact
          ref={section => {
            this.Contact = section
          }}
        />
      </div>
    )
  }
}

export default App
