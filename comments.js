// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

// Create a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});