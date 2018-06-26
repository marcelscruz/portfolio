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
    console.log(component)
    scrollToComponent(this.About)
  }

  render() {
    return (
      <div className="app">
        <Menu scrollPage={this.scrollPage} />
        <Welcome />
        <About
          ref={section => {
            this.About = section
          }}
        />
        <Experience />
        <Contact />
      </div>
    )
  }
}

export default App
