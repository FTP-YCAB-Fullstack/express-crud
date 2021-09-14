"use strict"

const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

const student = [
    {
        id: 1,
        name: "Alim Makruf Tri Rachmadi",
        role: "student"
    },
    {
        id: 2,
        name: "Ghabriel Sebastian Muslim",
        role: "student"
    }
]

const mentor = [
    {
        id:1,
        name: "Eddy Permana",
        batch: 'Fantastic Falkor'
    },
    {
        id:2,
        name: "Lutfhi Fitra",
        batch: 'Fantastic Falkor'
    },
    {
        id:3,
        name: "Afis Pratama",
        batch: 'Fantastic Falkor'
    }
]

const pelajaran = [
    {
        id:1,
        name: "Belajar HTML"

    },
    {
        id:2,
        name: "Belajar CSS"
    }, 
    {
        id:3,
        name: "Belajar Javascript"
    }
]



app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/create', (req, res) => {
    res.send('ini create')
})
// Student
app.get('/student', (req, res) => {
    res.status(200).json(student)
})
app.get('/student/:studentId', (req,res) => {
    res.status(200).json(student.filter(students => students.id === +req.params.studentId))
})
app.post('/student', (req,res) => {
    const {id,name,role} = req.body;

    const newStudent = {
        id: id,
        name: name,
        role: role
    }
    student.push(newStudent)
    res.status(201).json({
        message: 'Already add new student',
        students: newStudent
    })
})

//Mentor
app.get('/mentor', (req, res) => {
    res.status(200).json(mentor)
})
app.get('/mentor/:mentorId', (req,res) => {
    res.status(200).json(mentor.filter(mentors => mentors.id === +req.params.mentorId))
})
app.post('/mentor', (req,res) => {
    const {id,name,batch} = req.body;

    const newMentor = {
        id: id,
        name: name,
        batch: batch
    }
    mentor.push(newMentor)
    res.status(201).json({
        message: "Already add new mentor",
        mentor: newMentor
    })
})

app.listen(3000, () => {
    console.log('Example app listening at port 3000')
})