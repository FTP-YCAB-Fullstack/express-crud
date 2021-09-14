"use strict";

const express = require("express");
const cors = require("cors");
const port = 3000;
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Data
let students = [
  { id: 1, name: "Dimas", role: "students" },
  { id: 2, name: "Mulia", role: "students" },
  { id: 3, name: "Yusril", role: "students" },
];

let mentors = [
  { id: 1, name: "kak Eddy", batch: "fantastic-falkor" },
  { id: 2, name: "kak Afista", batch: "fantastic-falkor" },
  { id: 3, name: "kak Lutfi", batch: "fantastic-falkor" },
];

let courses = [
  { id: 1, courseName: "Belajar HTML", level: "easy" },
  { id: 2, courseName: "Belajar CSS", level: "medium" },
  { id: 3, courseName: "Belajar JS", level: "hard" },
];

// students CRUD
app.get("/student", (req, res) => {
  res.status(200).send(students);
});

app.post("/student", (req, res) => {
  let { name } = req.body;

  let newStudent = {
    id: students.length + 1,
    name: name,
    role: "student",
  };
  students.push(newStudent);

  res.status(201).send({
    massage: `Menambahkan data baru`,
    students: newStudent,
  });
});

app.delete("/student/:id", (req, res) => {
  let { id } = req.params;

  let whichData = students.findIndex((idx) => idx.id == id);

  students.splice(whichData, 1);

  res.status(410).send({
    message: ":( anda telah menghapus Data",
  });
});

app.put("/student/:id", (req, res) => {
  let { id } = req.params.id;
  let { name } = req.body;

  let newUpdate = {
    id: +req.params.id,
    name: name,
    role: "students",
  };

  students = students.map((student) => {
    if (student.id === Number(id)) {
      return newUpdate;
    }
    return student;
  });

  res
    .status(202)
    .send({ message: "succes update data", "new data update": newUpdate });
});

// mentor CRUD
app.get("/mentor", (req, res) => {
  res.status(200).send(mentors);
});

app.post("/mentor", (req, res) => {
  let { name, batch } = req.body;

  let newMentors = {
    id: students.length + 1,
    name: name,
    batch: batch,
  };
  mentors.push(newMentors);

  res.status(201).send({
    massage: `Menambahkan data baru`,
    mentors: newMentors,
  });
});

app.delete("/mentor/:id", (req, res) => {
  let { id } = req.params;

  let whichData = mentors.findIndex((idx) => idx.id == id);

  mentors.splice(whichData, 1);

  res.status(410).send({
    message: ":( anda telah menghapus Data",
  });
});

app.put("/mentor/:id", (req, res) => {
  let { id } = req.params.id;
  let { name, batch } = req.body;

  let newUpdate = {
    id: +req.params.id,
    name: name,
    batch: batch,
  };

  mentors = mentors.map((mentor) => {
    if (mentor.id === Number(id)) {
      return newUpdate;
    }
    return mentor;
  });

  res
    .status(202)
    .send({ message: "succes update data", "new data update": newUpdate });
});

// course CRUD
app.get("/course", (req, res) => {
  res.status(200).send(courses);
});

app.post("/course", (req, res) => {
  let { name, level } = req.body;

  let newCourse = {
    id: courses.length + 1,
    courseName: name,
    level: level,
  };
  courses.push(newCourse);

  res.status(201).send({
    massage: `Menambahkan data baru`,
    courses: newCourse,
  });
});

app.delete("/course/:id", (req, res) => {
  let { id } = req.params;

  let whichData = courses.findIndex((idx) => idx.id == id);

  courses.splice(whichData, 1);

  res.status(410).send({
    message: ":( anda telah menghapus Data",
  });
});

app.put("/course/:id", (req, res) => {
  let { id } = req.params.id;
  let { name, level } = req.body;

  let newUpdate = {
    id: +req.params.id,
    name: name,
    level: level,
  };

  courses = courses.map((course) => {
    if (course.id === Number(id)) {
      return newUpdate;
    }
    return course;
  });

  res
    .status(202)
    .send({ message: "succes update data", "new data update": newUpdate });
});

app.listen(port, () => {
  console.log(`Server sedang berjalan di localhost:${port}`);
});
