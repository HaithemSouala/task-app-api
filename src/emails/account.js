const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SG_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'soualhaitem@gmail.com',
        subject: 'Welcome to the Task APP',
        text: `Welcome to the task app, ${name}. Let me know how you get along with the app`
    })
}


const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'soualhaitem@gmail.com',
        subject: 'Bye Bye!',
        text: `${name}, we're sad to hear that from you!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}

