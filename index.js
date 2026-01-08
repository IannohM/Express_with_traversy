const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config('./.env');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
    console.log(`Server Running on port ${PORT}...`);
});
