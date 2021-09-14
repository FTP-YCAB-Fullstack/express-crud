"use strict";

const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const students = [
  {
    id: 1,
    name: "Hamdi",
    role: "student",
  },
  {
    id: 2,
    name: "Andi",
    role: "student",
  },
];

const mentors = [
  {
    id: 1,
    name: "Eddy",
    batch: "Fantastic Falkor",
  },
  {
    id: 2,
    name: "Afis",
    batch: "Fantastic Falkor",
  },
];

const courses = [
  {
    id: 1,
    name: "Express",
    level: "hard",
  },
  {
    id: 2,
    name: "React",
    level: "hard",
  },
];

// CRUD Student
app.get("/students", (req, res) => {
  res.send(students);
});

app.post("/students", (req, res) => {
  const { id, name } = req.body;

  let newStudent = {
    id: students.length + 1,
    name: "bima",
    role: "student",
  };

  students.push(newStudent);

  res.send({
    message: "Student added successfully",
    student: {
      id,
      name,
    },
  });
});

app.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  const removeStudent = students.filter((student) => student.id === id);
  students.slice(removeStudent, removeStudent + 1);

  res.send({
    message: "Student removed successfully",
  });
});

app.put("/students/:id", (req, res) => {
  const { name, role } = req.body;
  student = students.map((student) => {
    if (student.id === +req.params.id) {
      return {
        id: student.id,
        name,
        role,
      };
    }
    return student;
  });

  res.send({
    message: "success updated successfully",
  });
});

// CRUD Mentors
app.get("/mentors", (req, res) => {
  res.send(mentors);
});

app.post("/mentors", (req, res) => {
  const { id, name } = req.body;

  let newMentor = {
    id: mentors.length + 1,
    name: "luthfi",
  };

  mentors.push(newMentor);

  res.send({
    message: "mentor added successfully",
    mentors: {
      id,
      name,
    },
  });
});

app.delete("/mentors/:id", (req, res) => {
  const id = Number(req.params.id);

  const removeMentor = mentors.filter((mentor) => mentor.id === id);
  mentors.slice(removeMentor, removeMentor + 1);

  res.send({
    message: "mentor removed successfully",
  });
});

app.put("/mentors/:id", (req, res) => {
  const { name, role } = req.body;
  mentor = mentors.map((student) => {
    if (student.id === +req.params.id) {
      return {
        id: student.id,
        name,
        role,
      };
    }
    return student;
  });

  res.send({
    message: "success updated successfully",
  });
});

// CRUD Course
app.get("/courses", (req, res) => {
  res.send(courses);
});

app.post("/courses", (req, res) => {
  const { id, name } = req.body;

  let newCourse = {
    id: courses.length + 1,
    name: "javascript",
  };

  courses.push(newCourse);

  res.send({
    message: "courses added successfully",
    courses: {
      id,
      name,
    },
  });
});

app.delete("/courses/:id", (req, res) => {
  const id = Number(req.params.id);

  const removeCourse = courses.filter((course) => course.id === id);
  courses.slice(removeCourse, removeCourse + 1);

  res.send({
    message: "course removed successfully",
  });
});

app.put("/courses/:id", (req, res) => {
  const { name, role } = req.body;
  course = courses.map((course) => {
    if (course.id === +req.params.id) {
      return {
        id: course.id,
        name,
        role,
      };
    }
    return course;
  });

  res.send({
    message: "course updated successfully",
  });
});

app.listen(port, () => {
  console.log("localhost:3000");
});
