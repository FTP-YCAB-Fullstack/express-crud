"use strict"

const express = require('express');

const app = express()
app.use(express.urlencoded({ extended:true }))
app.use(express.json())


app.get("/",(req,res) => {
    res.send("INI HALAMAN UTAMA")
})

const books = [
    {
        id : 1,
        name : "Belajar HTML"
    },
    {
        id : 2,
        name : "Belajar CSS"
    },
    {
        id : 3,
        name : "Belajar Javascript"
    },
]

app.get("/", (req,res) => {
    res.send("server running (route)")
})

app.post("/books/create",(req,res) => {
    let payload = {
        id : +req.body.id,
        name : req.body.namaBuku
    }

    books.push(payload)
    
    res.send(books)
})

app.get("/books",(req,res) => {
    res.status(200).json(books)
})

app.get("/books/:id",(req,res) => {
    res.status(200).json(books.filter(book => book.id === +req.params.id))
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
    res.status(200).send(students)
})

app.post("/student/create",(req,res) => {
    let payload = {
        id : students.length + 1,
        nama : req.body.namaMurid,
        role : req.body.role
    }

    students.push(payload)
    
    res.send(students)
})

app.delete("/student/delete/:id",(req,res) => {
    students = students.filter((el) => el.id !== req.params.id*1);
    res.send(students)
})


app.listen(3000, () => console.log("server running"))