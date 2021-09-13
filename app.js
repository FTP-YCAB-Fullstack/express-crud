'use strict';

const express =  require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.urlencoded({extended: true }));

const students = [
    {
        id: 1,
        nama: 'ferrari diaz',
        role: 'student'
    },
    {
        id: 2,
        nama: 'dimas maulana',
        role: 'student'
    },
    {
        id: 3,
        nama: 'mulia',
        role: 'student'
    },
    {
        id: 4,
        nama: 'yusril',
        role: 'student'
    },
];

const mentor = [
    {
        id: 1,
        nama: 'eddy permana',
        batch: 'fantastic falkor'
    },
    {
        id: 2,
        nama: 'afista pratama',
        batch: 'fantastic falkor'
    },
    {
        id: 3,
        nama: 'luthfi',
        batch: 'fantastic falkor'
    },
];

app.get('/students', (req,res) => {
    res.send({
        students: students
    })
});




app.listen(3000, () => console.log('server running'));