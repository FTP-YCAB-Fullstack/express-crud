'use strict'
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('server is running')
});

app.get('/Api/:name', (req, res) => {
    res.send('API will Here!')
});

app.listen(3000, () => ('server is running') )