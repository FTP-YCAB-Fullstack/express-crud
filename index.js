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

app.post('/students', (req, res) => {
    const { id, nama, role } = req.body;

    const addStudent = {
        id: id,
        nama: nama,
        role: role
    };

    students.push(addStudent);
    res.status(200).json({
        message: 'Adding a new student data',
        student: createStudent
    })
})

app.delete('/students/:studentId', (req, res) => {
    students = students.filter(student => student.id !== +req.params.studentId)
    res.status(204).json({
        message: 'Students deleted!'
    })
})

// ==================== MENTORS ==================== // 

app.get('/mentors', (req, res) => {
    res.status(200).json(mentors)
})

app.get('/mentors/:mentorId', (req, res) => {
    res.status(200).json(mentors.filter((mentor => mentor.id === +req.params.mentorId)))
})

app.post('/mentors', (req, res) => {
    const { id, nama, batch } = req.body;

    const addMentor = {
        id: id,
        nama: nama,
        batch: batch
    };

    mentors.push(addMentor);
    res.status(200).json({
        message: 'Adding a new mentor',
        mentor: addMentor
    })
})

app.delete('/mentors/:mentorId', (req, res) => {
    mentors = mentors.filter(mentor => mentor.id !== +req.params.mentorId)
    res.status(204).json({
        message: 'Mentors deleted!'
    })
})

// ==================== Courses ==================== //

app.get('/courses', (req, res) => {
    res.status(200).json(courses)
})

app.get('/courses/:courseId', (req, res) => {
    res.status(200).json(courses.filter((course => course.id === +req.params.courseId)))
})

app.post('/courses', (req, res) => {
    const { id, nama, tingkatKesulitan } = req.body;

    const addCourse = {
        id: id,
        nama: nama,
        tingkatKesulitan: tingkatKesulitan
    };

    courses.push(addCourse);
    res.status(200).json({
        message: 'Adding a new course',
        course: addCourse
    })
})

app.delete('/courses/:courseId', (req, res) => {
    courses = courses.filter(course => course.id !== +req.params.courseId)
    res.status(204).json({
        message: 'Courses deleted!'
    })
})