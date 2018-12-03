'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/codemobiles/print',(req,res) => {
    res.json("hi wizz");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);