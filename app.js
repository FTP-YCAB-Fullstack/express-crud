"use strict"

const express = require('express');

const app = express()
app.use(express.urlencoded({ extended:true }))
app.use(express.json())


app.get("/",(req,res) => {
    res.send("INI HALAMAN UTAMA")
})

let students = [
    {
        id : 1,
        nama : "iqbal",
        role : "murid"
    },
    {
        id : 2,
        nama : "alfa",
        role : "murid"
    }
]

let mentors = [
    {
        id : 1,
        nama : "afista",
        batch : "Fantastic Falcor"
    },
    {
        id : 2,
        nama : "eddy",
        batch : "Fantastic Falcor"
    }
]

let courses = [
    {
        id : 1,
        namaCourse : "HTML",
        tingkatKesulitan : "Mudah"
    },
    {
        id : 2,
        namaCourse : "CSS",
        tingkatKesulitan : "Medium"
    }

]


/// STUDENTS
app.get("/student",(req,res) => {
    res.status(200).json(students)
})

app.post("/student/create",(req,res) => {
    let payload = {
        id : students.length + 1,
        nama : req.body.namaMurid,
        role : req.body.role
    }

    students.push(payload)
    
    res.status(201).json(students)
})

app.delete("/student/delete/:id",(req,res) => {
    students = students.filter((el) => el.id !== req.params.id*1);
    res.status(202).json(students)
})

app.put("/student/put/:id",(req,res) => {
    let ind = req.params.id - 1;

    const payload = {
        id : req.body.id,
        nama : req.body.namaMurid,
        role : req.body.role
    }

    students[ind] = payload

    res.status(202).json(students)
})

app.patch("/student/patch/:id",(req,res) => {
    let ind = req.params.id - 1;

    students[ind] = {...students[ind],...req.body}

    res.status(202).json(students)

})


// MENTOR
app.get("/mentor",(req,res) => {
    res.status(200).json(mentors)
})

app.post("/mentor/create",(req,res) => {
    let payload = {
        id : mentors.length + 1,
        nama : req.body.namaMentor,
        batch : req.body.batch
    }

    mentors.push(payload)
    
    res.status(201).json(mentors)
})

app.delete("/mentor/delete/:id",(req,res) => {
    mentors = mentors.filter((el) => el.id !== req.params.id*1);
    res.status(202).json(mentors)
})

app.put("/mentor/put/:id",(req,res) => {
    let ind = req.params.id - 1;

    const payload = {
        id : req.body.id,
        nama : req.body.namaMentor,
        batch : req.body.batch
    }

    mentors[ind] = payload

    res.status(202).json(mentors)
})

app.patch("/mentor/patch/:id",(req,res) => {
    let ind = req.params.id - 1;

    mentors[ind] = {...mentors[ind],...req.body}

    res.status(202).json(mentors)

})

// COURSES
app.get("/course",(req,res) => {
    res.status(200).json(courses)
})

app.post("/course/create",(req,res) => {
    let payload = {
        id : courses.length + 1,
        namaCourse : req.body.namaCourse,
        tingkatKesulitan : req.body.tingkatKesulitan
    }

    courses.push(payload)
    
    res.status(201).json(courses)
})

app.delete("/course/delete/:id",(req,res) => {
    courses = courses.filter((el) => el.id !== req.params.id*1);
    res.status(202).json(courses)
})

app.put("/course/put/:id",(req,res) => {
    let ind = req.params.id - 1;

    const payload = {
        id : req.body.id,
        namaCourse : req.body.namaCourse,
        tingkatKesulitan : req.body.tingkatKesulitan
    }

    courses[ind] = payload

    res.status(202).json(courses)
})

app.patch("/course/patch/:id",(req,res) => {
    let ind = req.params.id - 1;

    courses[ind] = {...courses[ind],...req.body}

    res.status(202).json(courses)

})

app.listen(3000, () => console.log("server running"))