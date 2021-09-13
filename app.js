'use strict';

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('server running')
});

// // STUDENT

const murid =  [
    {
        id: 1,
        nama: "al",
        role: "murid"
    },
    {
        id: 2,
        nama: "fathya",
        role: "murid" 
    }
]


app.get("/student", (req, res) => {
    res.status(200).send(murid)
})

app.post("/student/post", (req, res) => {
    let payload = {
          id : murid.length+1,
        nama : req.body.nama,
        role : req.body.role
    }
    murid.push(payload)

    res.send(murid)
})

app.delete("student/:id", (req, res) => {
     murid = murid.filter(element => element.id !== +req.params.id)
     res.send(murid)
})
 


app.listen(3000, () => console.log('server running'));