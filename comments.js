//create web server
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

//express middleware
app.use(express.static('public'));

//route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

//start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});