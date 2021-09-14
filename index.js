const express = require("express");
const app = express();
// const bodyParser = require("body parser");

// app.use(bodyParser.json());
app.use(express.json())


const crud = ["Student", "Mentors", "Course"]
const student = [
    {
        nama: "Saeful", 
        role: "Pendiam"
    },
    {
        nama: "Renita",
        role: "Periang"
    }];
const mentor = [
    {
        nama: "Mas Eddy",
        batch: "Fantastic Falkor"
    },
    {
        nama: "Mas Afis",
        batch: "Fantastic Falkor"
    }];
const courses = [
    {
        namaCourse: "Belajar HTML & CSS",
        tingkatKesulitan: "Easy"
    },
    {
        namaCourse: "Belajar JavaScript",
        tingkatKesulitan : "Medium"
    }];

app.get("/", (req, res) => {
    res.status(200).send({
        msg: crud,
    });
});

app.post("/newStudent", (req, res) => {
    const newStudent = req.body;
    student.push(newStudent);
    res.status(201).send({
        msg : newStudent,
    });
});

app.get("/getStudent", (req, res) => {
    res.status(200).send({
        msg : student,
    });
});

app.patch("/patchStudent", (req, res) => {
    student[req.body.id] = req.body.newStudent;
    res.status(202).send({
        msg:  student,
    });
});

app.delete("/deleteStudent", (req, res) => {
    student[req.body] = "";
    res.status(202).send({
        msg: "sudah ke delete",
    });
});

app.post("/newMentor", (req, res) => {
    const newMentor = req.body;
    mentor.push(newMentor);
    res.status(201).send({
        msg : newMentor,
    });
});

app.get("/getMentor", (req, res) => {
    res.status(200).send({
        msg : mentor,
    });
});

app.patch("/patchMentor", (req, res) => {
    mentor[req.body.id] = req.body.newMentor;
    res.status(202).send({
        msg:  mentor,
    });
});

app.delete("/deleteMentor", (req, res) => {
    mentor[req.body] = "";
    res.status(202).send({
        msg: "sudah ke delete",
    });
});

app.post("/newCourses", (req, res) => {
    const newCourses = req.body;
    courses.push(newCourses);
    res.status(201).send({
        msg : newCourses,
    });
});

app.get("/getCourses", (req, res) => {
    res.status(200).send({
        msg : courses,
    });
});

app.patch("/patchCourses", (req, res) => {
    courses[req.body] = req.body.newCourses;
    res.status(202).send({
        msg:  courses,
    });
});

app.delete("/deleteCourses", (req, res) => {
    courses[req.body] = "";
    res.status(202).send({
        msg: "sudah ke delete",
    });
});

app.listen(3000, () => console.log("server running"))
