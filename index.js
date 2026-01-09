const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
dotenv.config('./config.env');

const users = require('./members');
const Logger = require('./middleware/logger')

const app = express();


//& Init Middleware
// app.use(Logger);

//& Set A static Folder
app.use(express.static(path.join(__dirname, 'public')));

//& Welcome Page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'index.html'));
});

//& About Page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', 'about.html'));
});

//& get all users
app.get('/api/members', (req, res) => {
    res.json(users);
});

//& Page Not Found
app.get('/*notfound', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pages', '404.html'));
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, (req, res) => {
    console.log(`Server Running on port ${PORT}...`);
});
