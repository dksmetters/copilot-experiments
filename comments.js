// Create web server
const express = require('express');
const app = express();

// Use the public directory to serve static files
app.use(express.static('public'));

// Use the body parser to read the body of the request
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a global variable
let comments = [];

// Path: /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Path: /comments
app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.json(comments);
});

// Path: /comments
app.delete('/comments', (req, res) => {
    comments = [];
    res.json(comments);
});

// Start the server
app.listen(3000, () => {
    console.log('Server has started on port 3000');
});
