import nodemailer from 'nodemailer'
import config from './config'

require('dotenv').config();

const log = console.log;

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD 
    }
});


const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'kuiil7ig11@gmail.com',
    subject: `New message from ${from} visitors`,
    text,
    replyTo: from
  };

  console.log(send)

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send
