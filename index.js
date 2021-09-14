"use strict"

const express = require('express');

const index = express();

// index.get('/', (req, res) => {
//     res.send('server running');
// });
// // No 1
// index.get("/crud", (req, res) => {
//     res.send("Students, Mentors, Course")
// })

//Percobaan
// index.get("/crud1", (req, res) => {
//     res.send('<h1>apa</h1>');
// });

// index.get('/students/:name', (req, res) => {
//     res.send(`Hallo $(req.params.name)`);
// });


index.listen(5000, () => console.log('server running'));