import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      submitResult: '',
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

  submitLoader = () => {
    this.setState({
      submitResult: 'Sending',
    })

    this.startSubmitLoader = setInterval(() => {
      const submitResult = this.state.submitResult

      if (submitResult === 'Sending...') {
        this.setState({
          submitResult: 'Sending',
        })
      } else {
        this.setState(prevState => ({
          submitResult: prevState.submitResult.concat('.'),
        }))
      }
    }, 200)
  }

  clearForm = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
    })
  }

  onSubmit = e => {
    e.preventDefault()

    this.submitLoader()

    const name = this.state.name
    const email = this.state.email
    const message = this.state.message

    axios({
      method: 'POST',
      url: 'https://f57gdvhq7a.execute-api.us-east-1.amazonaws.com/prod',
      contentType: 'application/json',
      data: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    }).then(response => {
      if (response.data.result === 'success') {
        this.setState({
          submitResult: "Message received, I'll contact you soon!",
        })
        clearInterval(this.startSubmitLoader)
        this.clearForm()
      } else {
        this.setState({
          submitResult: 'Something went wrong, please try again.',
        })
        clearInterval(this.startSubmitLoader)
        this.clearForm()
      }
    })
  }

  render() {
    return (
      <div className="contact">
        <Zoom>
          <h2>Let's get in touch</h2>
        </Zoom>
        <Fade bottom>
          <div className="contact__sections">
            <form className="contact__form" onSubmit={this.onSubmit}>
              <div className="inputs">
                <input
                  type="text"
                  className="form__input input__name"
                  placeholder="*Name"
                  value={this.state.name}
                  onChange={this.onNameChange}
                  required
                />
                <input
                  type="email"
                  className="form__input input__email"
                  placeholder="*Email"
                  value={this.state.email}
                  onChange={this.onEmailChange}
                  required
                />
              </div>
              <textarea
                className="form__input textarea"
                placeholder="*Message"
                value={this.state.message}
                onChange={this.onMessageChange}
                required
              />
              <div className="submit-result">
                {this.state.submitResult && (
                  <Fade left>
                    <h4>{this.state.submitResult}</h4>
                  </Fade>
                )}
              </div>
              <button className="contact__button">Send</button>
            </form>
            <div className="social-medias">
              <h3>Elsewhere</h3>
              <div className="social-medias__button">
                <a
                  href="https://www.linkedin.com/in/marcelscruz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="social-medias__icon"
                  />
                  <h4>LinkedIn</h4>
                </a>
              </div>
              <div className="social-medias__button">
                <a
                  href="https://github.com/marcelscruz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="social-medias__icon"
                  />
                  <h4>GitHub</h4>
                </a>
              </div>
              <div className="download-cv">
                <a
                  className="download__button"
                  href="resume.pdf"
                  download="MarcelCruz-Resume.pdf"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    )
  }
}

export default Contact
