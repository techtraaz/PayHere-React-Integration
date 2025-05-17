const express = require('express');
const cors = require('cors');
const md5 = require('crypto-js/md5');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Generate hash endpoint
app.post('/generate-hash', (req, res) => {
    const { oId, totalAmount } = req.body;

    const merchantSecret = process.env.MSEC;
    const merchantId = process.env.MID;

    const hashedSecret = md5(merchantSecret).toString().toUpperCase();
    const amountFormatted = parseFloat(totalAmount)
        .toLocaleString("en-us", { minimumFractionDigits: 2 })
        .replaceAll(",", "");
    const currency = "LKR";

    const hash = md5(
        merchantId + oId + amountFormatted + currency + hashedSecret
    ).toString().toUpperCase();

    res.json({ hash });
    
});

// Payment notification endpoint
app.post('/notify-payment', (req, res) => {
    const paymentData = req.body;
    console.log('Payment notification received:', paymentData);
    // Here you would typically:
    // 1. Verify the payment
    // 2. Update your database
    // 3. Send confirmation emails
    res.status(200).send("Payment recorded");
});

app.listen(3001, () => console.log('Payment server running on http://localhost:3001')); 