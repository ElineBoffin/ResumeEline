// functions/submitForm.js
const axios = require('axios');

exports.handler = async function (event, context) {
    const data = JSON.parse(event.body);

    // Customize the email address where you want to receive the form submissions
    const toEmail = 'your-email@example.com';

    try {
        await axios.post(
            `https://api.emailjs.com/api/v1.0/email/send`,
            {
                service_id: 'your_emailjs_service_id',
                template_id: 'your_emailjs_template_id',
                user_id: 'your_emailjs_user_id',
                template_params: {
                    name: data.name,
                    email: data.email,
                    message: data.message
                }
            }
        );

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Form submitted successfully' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error sending email' }),
        };
    }
};