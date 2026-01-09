const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config('./.env');

const app = express();

//& Set A static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'about.html'));
});

app.get('/*notfound', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', '404.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
    console.log(`Server Running on port ${PORT}...`);
});
