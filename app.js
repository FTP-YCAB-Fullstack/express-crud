const express = require("express");
const app = express();

let students = [
  {
    nama: "mulia",
    role: "gamers"
  },
  {
    nama: "ihsan",
    role: "mastah"
  }
];

let mentors = [
  {
    nama: "afis",
    batch: "fantastic falkor"
  },
  {
    nama: "eddy",
    batch: "fantastic falkor"
  }
];

let courses = [
  {
    namaCourse: "Belajar HTML",
    tingkatKesulitan: "dasar"
  },
  {
    namaCourse: "Belajar CSS",
    tingkatKesulitan: "dasar"
  }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Students
app.get("/students", (req, res) => {
  res.status(200).send(students);
});

app.post("/students", (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.status(201).send(newStudent);
});

app.put("/students/:id", (req, res) => {
  const id = req.params.id;
  const newStudent = req.body;
  students = students.map((item, index) => {
    if (Number(id) === index) {
      return newStudent;
    }
    return item;
  });
  res.status(201).send(newStudent);
});

app.delete("/students/:id", (req, res) => {
  const id = req.params.id;
  students = students.filter((item, index) => {
    if (Number(id) === index) {
      return false;
    }
    return true;
  });
  res.status(202).send(id);
});

// Mentors
app.get("/mentors", (req, res) => {
  res.status(200).send(mentors);
});

app.post("/mentors", (req, res) => {
  const newMentor = req.body;
  mentors.push(newMentor);
  res.status(201).send(newMentor);
});

app.put("/mentors/:id", (req, res) => {
  const id = req.params.id;
  const newMentor = req.body;
  mentors = mentors.map((item, index) => {
    if (Number(id) === index) {
      return newMentor;
    }
    return item;
  });
  res.status(201).send(newMentor);
});

app.delete("/mentors/:id", (req, res) => {
  const id = req.params.id;
  mentors = mentors.filter((item, index) => {
    if (Number(id) === index) {
      return false;
    }
    return true;
  });
  res.status(202).send(id);
});

// Courses
app.get("/courses", (req, res) => {
  res.status(200).send(courses);
});

app.post("/courses", (req, res) => {
  const newCourses = req.body;
  courses.push(newCourses);
  res.status(201).send(newCourses);
});

app.put("/courses/:id", (req, res) => {
  const id = req.params.id;
  const newCourses = req.body;
  courses = courses.map((item, index) => {
    if (Number(id) === index) {
      return newCourses;
    }
    return item;
  });
  res.status(201).send(newCourses);
});

app.delete("/courses/:id", (req, res) => {
  const id = req.params.id;
  courses = courses.filter((item, index) => {
    if (Number(id) === index) {
      return false;
    }
    return true;
  });
  res.status(202).send(id);
});

app.listen(3000, () => console.log("running server localhost:3000..."));
