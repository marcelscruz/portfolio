import React, { Component } from 'react'
import axios from 'axios'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  onNameChange = e => {
    const name = e.target.value
    this.setState({
      name,
    })
  }

  onEmailChange = e => {
    const email = e.target.value
    this.setState({
      email,
    })
  }

  onMessageChange = e => {
    const message = e.target.value
    this.setState({
      message,
    })
  }

  onSubmit = e => {
    e.preventDefault()

    const name = this.state.name
    const email = this.state.email
    const message = this.state.message

    console.log('name', name)
    console.log('email', email)
    console.log('message', message)

    axios({
      method: 'POST',
      url: 'http://localhost:3002/send',
      data: {
        name,
        email,
        message,
      },
    }).then(response => {
      if (response.data.msg === 'success') {
        alert('Message Sent.')
        // this.resetForm()
      } else if (response.data.msg === 'fail') {
        alert('Message failed to send.')
      }
    })
  }

  render() {
    return (
      <div className="contact">
        <h2>Let's get in touch</h2>
        <div className="contact__sections">
          <form className="contact__form" onSubmit={this.onSubmit}>
            <div className="inputs">
              <input
                type="text"
                className="form__input input__name"
                placeholder="Name"
                value={this.state.name}
                onChange={this.onNameChange}
              />
              <input
                type="text"
                className="form__input input__email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </div>
            <textarea
              className="form__input textarea"
              placeholder="Message"
              value={this.state.message}
              onChange={this.onMessageChange}
            />
            <button className="form__button">Send</button>
          </form>
          <div className="social-medias">
            <h3>Elsewhere</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
