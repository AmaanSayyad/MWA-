// File: utils/verifyData.js
const axios = require('axios');

async function verifyWithNumbersProtocol(file) {
    const response = await axios.post('https://api.numbersprotocol.io/v1/verify', {
        file: file,
        apiKey: process.env.NUMBERS_API_KEY
    });
    return response.data;
}

module.exports = { verifyWithNumbersProtocol };
