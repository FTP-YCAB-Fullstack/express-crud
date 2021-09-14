'use strict'
const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const student = [
    {
        id = 1,
        nama = 'Ganda imas',
        status = 'student'
    },
    {
        id = 2,
        nama = 'Alim Makruf',
        status = 'student'
    },
    {
        id = 3,
        nama = 'Kelvin',
        status = 'student'
    }
]

const mentor = [
    {
        id = 1, 
        nama = 'Eddy Permana',
        bacth  = 'Fantastic Falkor'
    },
    {
        id = 2, 
        nama = 'Afista Pratama',
        bacth  = 'Fantastic Falkor'
    },
    {
        id = 3, 
        nama = 'Lutfi Fitra',
        bacth  = 'Fantastic Falkor'
    }
]

const course = [
    {
        id = 1,
        namacourse = 'java script',
        kesulitan = 'tinggi'
    },
    {
        id = 2,
        namacourse = 'frameworks Css',
        kesulitan = 'medium'
    },
    {
        id = 3, 
        namacourse = 'Html',
        kesulitan = 'medium'
    }
]

app.get('/', (req, res) => {
    res.send('server is running')
});

app.get('/Api', (req, res) => {
    res.send('API will Here!')
});

app.listen(3000, () => ('server is running') )