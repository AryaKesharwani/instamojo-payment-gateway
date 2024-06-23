const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.post('/payment', async (req, res) => {
    const { amount } = req.body;
    const headers = {
        'X-Api-Key': process.env.INSTAMOJO_API_KEY,
        'X-Auth-Token': process.env.INSTAMOJO_AUTH_TOKEN,
    };
    const payload = {
        purpose: 'Test Payment',
        amount,
        buyer_name: 'John Doe',
        email: 'john.doe@example.com',
        phone: '9999999999',
        redirect_url: 'http://localhost:3000/payment-success',
    };

    try {
        const response = await axios.post('https://test.instamojo.com/api/1.1/payment-requests/', payload, { headers });
        res.json({ payment_url: response.data.payment_request.longurl });
    } catch (error) {
        console.error('Error creating payment request', error);
        res.status(500).send('Error creating payment request');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
