"use strict"

const express = require('express');

const index = express();

index.get('/', (req, res) => {
    res.send('server running');
});

index.get("/crud", (req, res) => {
    res.send("Students, Mentors, Course")
})

index.listen(5000, () => console.log('server running'));