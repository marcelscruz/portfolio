import React, { Component } from 'react'

// ********** COMPONENTS ********** //
import Menu from './components/Menu'
import Welcome from './components/Welcome'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Menu />
        <Welcome />
        <About />
        <Experience />
        <Contact />
      </div>
    )
  }
}

export default App
