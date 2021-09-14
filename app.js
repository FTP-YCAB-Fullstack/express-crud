'use strict';

const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('server running')
});


let murid =  [
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

let mentor =  [
    {
        id: 1,
        nama: "afista",
        batch: "FF"
    },
    {
        id: 2,
        nama: "eddy",
        batch: "FF" 
    }
]

let courses =  [
    {
        id: 1,
        namaCourse: "React Js",
        tingkatKesulitan: "Sulit"
    },
    {
        id: 2,
        namaCourse: "HTML",
        tingkatKesulitan: "Mudah" 
    }
]

//Murid

app.get("/student", (req, res) => {
    res.status(200).send(murid)
})

app.post("/student/post", (req, res) => {
    let studentCop = {
          id : murid.length+1,
        nama : req.body.nama,
        role : req.body.role
    }
    murid.push(studentCop)

    res.status(201).json(murid) 

})

app.delete("/student/delete/:id", (req, res) => {
     murid = murid.filter(element => element.id !== +req.params.id);
    
     res.status(204).json(murid)

})

app.put("/student/update/:id", (req, res) => {
    let index = req.params.id -1;
    const studentCop = { 
        id : req.body.id,
        nama : req.body.nama,
        role : req.body.role
    }
    murid[index] = studentCop
    res.status(202).json(murid)

})

// Mentor

app.get("/mentor", (req, res) =>{
    res.status(200).json(mentor)

})

app.post("/mentor/post", (req,res) => {
    let mentorCop = {
        id: mentor.length+1,
        nama: req.body.nama,
        batch: req.body.batch
    }
    mentor.push(mentorCop)
    res.status(201).json(mentor)

})
app.delete("/mentor/delete/:id", (req, res) => {
    mentor = mentor.filter(el => el.id !== req.params.id*1);
    res.status(204).json(mentor)

})

app.put("/mentor/update/:id", (req, res) => {
    let index = req.params.id -1;
    const mentorCop = { 
        id : req.body.id,
        nama : req.body.nama,
        batch : req.body.batch
    }
    mentor[index] = mentorCop
    res.status(202).json(mentor)

})

//Courses
app.get("/course", (req, res) =>{
    res.status(200).send(courses)
})

app.post("/course/post", (req,res) => {
    let coursesCop = {
        id: courses.length+1,
        namaCourse: req.body.nama,
        tingkatKesulitan: req.body.tingkatKesulitan
    }
    courses.push(coursesCop)
    res.status(201).json(courses)
})
app.delete("/course/delete/:id", (req, res) => {
    courses = courses.filter(el => el.id !== req.params.id*1);
    res.status(204).json(courses)
})

app.put("/course/update/:id", (req, res) => {
    let index = req.params.id -1;
    const coursesCop = { 
        id : req.body.id,
        namaCourse : req.body.namaCourse,
        tingkatKesulitan : req.body.tingkatKesulitan
    }
    courses[index] = coursesCop
    res.status(202).json(courses)
})

app.listen(3000, () => console.log('server running'));