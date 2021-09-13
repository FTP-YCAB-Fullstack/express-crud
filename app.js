const express = require('express')

const app = express()

app.listen(3000 , () => console.log('server running at port: 3000'))
app.use(express.urlencoded({ extended: true }))

let listStudents = [
    {
        id: 1,
        nama: "abdul latif",
        role: "student"
    },
    {
        id: 2,
        nama: "Yusril ihza",
        role: "student"
    },
    {
        id: 3,
        nama: "Kadek dedy",
        role: "student"
    },
]

let listMentors = [
    {
        id: 1,
        nama: "Eddy Permana",
        batch: "fantastic-falkor"
    },
    {
        id: 2,
        nama: "Lutfi",
        batch: "gantastic"
    },
    {
        id: 3,
        nama: "Afista",
        batch: "fantastic"
    },
]

let listCourses = [
    {
        id: 1,
        namaCourse: "Belajar HTML",
        tingkatKesulitan: "beginner"
    },
    {
        id: 2,
        namaCourse: "Belajar CSS",
        tingkatKesulitan: "intermediete"
    },
    {
        id: 3,
        namaCourse: "Belajar JS",
        tingkatKesulitan: "expert"
    },
]


// routing for students
app.get('/students' , (req,res) => {
    res.send({
        students: listStudents
    })
})

app.post('/students' , (req,res) => {
    const { id , nama , role } = req.body
    listStudents.push({ id, nama, role })
    res.send({
        message: "success create student",
        student: {
            id, nama,role
        }
    })
})

app.delete('/students/:id' , (req,res) => {
    const id = req.params.id
    listStudents = listStudents.filter(student => student.id !== +id)
    res.send({
        message: "success delete",
    })
})


// routing for mentorr
app.get('/mentors' , (req,res) => {
    res.send({
        mentors: listMentors
    })
})

app.post('/mentors' , (req,res) => {
    const { id , nama , batch } = req.body
    listMentors.push({ id , nama , batch })
    res.send({
        message: "success crete mentors",
        mentor: {
            id,nama,batch
        }
    })
})

app.delete('/mentors/:id' , (req,res) => {
    const id = req.params.id
    listMentors = listMentors.filter(mentor => mentor.id !== +id)
    res.send({
        message: "success delete data mentor"
    })
})


// routing for courses
app.get('/courses' , (req,res) => {
    res.send({
        courses: listCourses
    })
})

app.post('/courses' , (req,res) => {
    const { id , namaCourse , tingkatKesulitan } = req.body
    listCourses.push({ id , namaCourse , tingkatKesulitan })
    res.send({
        message: "success create course",
        course: { id , namaCourse , tingkatKesulitan }
    })
})

app.delete('/courses/:id' , (req,res) => {
    const id = req.params.id
    listCourses = listCourses.filter(course => course.id !== +id)
    res.send({
        message: "success delete data course"
    })
})