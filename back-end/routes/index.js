const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const creds = require('../config/config')

const transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
}

const transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error)
  } else {
    console.log('Server is ready to take messages')
  }
})

router.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const message = req.body.message
  const content = `Name: ${name} \n Email: ${email} \n Message: ${message} `

  const mail = {
    from: name,
    to: 'marcelcruz@live.com',
    subject: 'New Message',
    text: content,
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail',
      })
    } else {
      res.json({
        msg: 'success',
      })
    }
  })
})

module.exports = router
