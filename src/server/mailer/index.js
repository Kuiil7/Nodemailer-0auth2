import nodemailer from 'nodemailer'
require('dotenv').config();


let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      clientId,
      clientSecret,
      refreshToken,
      accessToken
    }
});
console.log(auth);

const send = ({ email, name, text }) => {
  const from = name && email ? `${name} <${email}>` : `${name || email}`
  const message = {
    from,
    to: 'kuiil7ig11@gmail.com',
    subject: `New message from ${from} (Portfolio)`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    )
  })
}

export default send
