import nodemailer from 'nodemailer'
import config from './config'

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    type: 'OAuth2',
    ...config
  }
})

const sendMail = message => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) => {
      if (error) {
        reject(error)
        return
      }
      resolve(info)
    })
  })
}

export default sendMail