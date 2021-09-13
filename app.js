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

app.get('/students/:id' , (req,res) => {
    let student = listStudents.find(student => student.id === +req.params.id)
    res.send({
        student
    })
})

app.post('/students' , (req,res) => {
    const { id , nama , role } = req.body
    listStudents.push({ id, nama, role })
    res.status(201).send({
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

app.put('/students/:id' , (req,res) => {
    const { nama , role } = req.body
    listStudents = listStudents.map(student => {
        if(student.id === +req.params.id) {
            return {
                id: student.id,
                nama,
                role,
            }
        }
        return student
    })
    res.send({
        message: "success update student",
    })
})


// routing for mentorr
app.get('/mentors' , (req,res) => {
    res.send({
        mentors: listMentors
    })
})

app.get('/mentors/:id' , (req,res) => {
    let mentor = listMentors.find(mentor => mentor.id === +req.params.id)
    res.send({
        mentor
    })
})

app.post('/mentors' , (req,res) => {
    const { id , nama , batch } = req.body
    listMentors.push({ id , nama , batch })
    res.status(201).send({
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

app.put('/mentors/:id' , (req,res) => {
    const { nama , batch } = req.body
    listMentors = listMentors.map(mentor => {
        if(mentor.id === +req.params.id) {
            return {
                id: mentor.id,
                nama,
                batch,
            }
        }
        return mentor
    })
    res.send({
        message: "success update mentor",
    })
})


// routing for courses
app.get('/courses' , (req,res) => {
    res.send({
        courses: listCourses
    })
})

app.get('/courses/:id' , (req,res) => {
    let course = listCourses.find(course => course.id === +req.params.id)
    res.send({
        course
    })
})

app.post('/courses' , (req,res) => {
    const { id , namaCourse , tingkatKesulitan } = req.body
    listCourses.push({ id , namaCourse , tingkatKesulitan })
    res.status(201).send({
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

app.put('/courses/:id' , (req,res) => {
    const { namaCourse , tingkatKesulitan } = req.body
    listCourses = listCourses.map(course => {
        if(course.id === +req.params.id) {
            return {
                id: course.id,
                namaCourse,
                tingkatKesulitan,
            }
        }
        return course
    })
    res.send({
        message: "success update course",
    })
})