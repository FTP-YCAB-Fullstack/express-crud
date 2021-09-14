const express = require('express')

const app = express()

app.use(express.urlencoded({extended: true}))

app.listen(3000, () => {
    console.log('Server Is Running')
})

let students = [
    {
        id: 1,
        nama: 'Gilang',
        role: 'Student'
    },
    {
        id: 2,
        nama: 'Asep',
        role: 'Student'
    },
    {
        id: 3,
        nama: 'Michael',
        role: 'Student'
    }
];

let mentors = [
    {
        id: 1,
        nama: 'Afista Pratama',
        batch: 'Fantastic Falkor'
    },
    {
        id: 2,
        nama: 'Luthfi Fitra',
        batch: 'Fantastic Falkor'
    },
    {
        id: 3,
        nama: 'Eddy Permana',
        batch: 'Fantastic Falkor'
    }
];

let courses = [
    {
        id: 1,
        nama: 'HTML',
        tingkatKesulitan: 'Mudah'
    },
    {
        id: 2,
        nama: 'CSS',
        tingkatKesulitan: 'Sedang'
    },
    {
        id: 3,
        nama: 'Javascript',
        tingkatKesulitan: 'Sulit'
    }
];

app.get('/', (req, res) => {
    res.json({
        message: "Server is running"
    })
})

// ==================== STUDENTS ==================== // 

app.get('/students', (req, res) => {
    res.status(200).json(students)
})

app.get('/students/:studentId', (req, res) => {
    res.status(200).json(students.filter((student => student.id === +req.params.studentId)))
})

// ==================== MENTORS ==================== // 

app.get('/mentors', (req, res) => {
    res.status(200).json(mentors)
})

app.get('/mentors/:mentorId', (req, res) => {
    res.status(200).json(mentors.filter((mentor => mentor.id === +req.params.mentorId)))
})

// ==================== MENTORS ==================== //

app.get('/courses', (req, res) => {
    res.status(200).json(courses)
})

app.get('/courses/:courseId', (req, res) => {
    res.status(200).json(courses.filter((course => course.id === +req.params.courseId)))
})