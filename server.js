// importing from main.js
const { gregorianToPersian, persianToGregorian } = require('./main');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint for converting gregorian to persian
app.post('/convert-to-persian', (req, res) => {
    const { date } = req.body;
    if (!date) {
        return res.status(400).send('Date is required');
    }

    try {
        const persianDate = gregorianToPersian(date);
        res.json({ persianDate });
    } catch (error) {
        res.status(500).send('Invalid date format');
    }
});

// API endpoint for converting persian to gregorian
app.post('/convert-to-gregorian', (req, res) => {
    const { date } = req.body;
    if (!date) {
        return res.status(400).send('Date is required');
    }

    try {
        const gregorianDate = persianToGregorian(date);
        res.json({ gregorianDate });
    } catch (error) {
        res.status(500).send('Invalid date format');
    }
});

// defult route
app.get('/', (req, res) => {
  res.send('Welcome to the Calendar Converter API');
});

// start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});