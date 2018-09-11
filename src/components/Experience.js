import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

class Experience extends Component {
  render() {
    // Check if user is using mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )

    const experiences = [
      {
        name: 'Fredfy',
        subtitle: 'Own Project',
        date: 'September 2017 - Present',
        description:
          'Based on spaced repetition, Fredfy delivers programming lessons and challenges mixed with a fun and gamified experience, making the process of learning easy and efficient for all new developers.',
        role: 'Full stack',
        technologies:
          'JavaScript | React | Redux | Sass | Node.js | Firebase | Git',
        link:
          'https://projects.invisionapp.com/share/FWJ21Y99EMT#/screens/294269992',
        // link: 'http://www.fredfy.com',
        image: '/images/fredfy-web-under-construction.jpg',
        // image: '/images/fredfy-web.jpg',
      },
      {
        name: 'Xunison',
        subtitle: 'Dublin, Ireland',
        date: 'June 2017 - August 2017',
        role: 'Front end',
        description:
          'A fast growing startup that develops both their hardware and software, providing many products, including smart home automation, streaming devices and IPTV/OTT.',
        technologies: 'HTML | CSS | JavaScript | jQuery | Git',
        link: 'https://xunison.com/',
        image: '/images/xunison-web.jpg',
      },
    ]

    return (
      <div className="experience">
        {experiences.map((experience, index) => {
          const {
            name,
            subtitle,
            date,
            description,
            role,
            technologies,
            link,
            image,
          } = experience

          return (
            <div key={name}>
              <div className="experience__item">
                <Fade bottom>
                  <a href={link} target="_blank">
                    <div
                      className="experience__image"
                      style={{
                        background: `url(${image}) no-repeat center center / cover`,
                      }}
                    />
                  </a>
                </Fade>
                <Fade bottom>
                  <div className="experience__description">
                    <h2>
                      {name}
                      <span> - {subtitle}</span>
                    </h2>
                    <h4>{date}</h4>
                    <h3>{description}</h3>
                    {isMobile ? (
                      <div>
                        <h3 className="role">{role} developer</h3>
                        <h4>{technologies}</h4>
                      </div>
                    ) : (
                      <h4>
                        {role} developer - {technologies}
                      </h4>
                    )}
                    <a href={link} target="_blank" className="external-link">
                      Visit
                    </a>
                  </div>
                </Fade>
              </div>
              {index !== experiences.length - 1 && (
                <Zoom>
                  <div className="experience__item__divisor" />
                </Zoom>
              )}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Experience
