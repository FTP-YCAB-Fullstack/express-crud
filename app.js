'use strict';

const express =  require('express');
const cors = require('cors');
const app = express();


app.use(cors());
app.use(express.urlencoded({extended: true }));

const studentsList = [
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

const mentorList = [
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

const course = [{
    nama: 'expressJS',
    tingkatKesulitan: 'expert'
}];


app.get('/students', (req,res) => {
    res.send({
        students: studentsList
    })
});

app.post('/students', (req,res) => {
    const {id, nama, role} = req.body
    studentsList.push({id, nama, role})
    res.send({
        msg: 'create student',
        student: (id, nama, role)
    });
});


app.get('/mentors', (req,res) => {
    res.send({
        mentors: mentorList
    })
});

app.post('/mentors', (req,res) => {
    const {id, nama, batch} = req.body
    mentorList.push({id, nama, batch})
    res.send({
        msg: 'create mentor',
        mentor: (id, nama, batch)
    });
});

app.get('/course', (req,res) => {
    res.send({
        courses: course
    })
});

app.post('/course', (req,res) => {
    const {nama, tingkatKesulitan} = req.body
    course.push({nama, tingkatKesulitan})
    res.send({
        msg: 'create course',
        courses: (nama, tingkatKesulitan)
    });
});


app.listen(3000, () => console.log('server running'));