const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let students = [
  {
    name: "Yusril",
    role: "student",
  },
  {
    name: "Dimas",
    role: "student",
  },
  {
    name: "Mulia",
    role: "student",
  },
];

let mentors = [
  {
    name: "Afista",
    role: "mentor",
  },
  {
    name: "Eddy",
    role: "mentor",
  },
  {
    name: "Luthfi",
    role: "mentor",
  },
];

let courses = [
  {
    name: "HTML",
    dificulty: "beginer",
  },
  {
    name: "CSS",
    dificulty: "intermediate",
  },
  {
    name: "Javascript",
    dificulty: "Expert",
  },
];

// CRUD For Students.

//Get data form Students.
app.get("/students", (req, res) => {
  res.status(200).send(students);
});

//Post data to Students.
app.post("/students", (req, res) => {
  const newData = req.body;
  students.push(newData);
  res.status(201).send(newData);
});

//Put for update and edit all inside off object.
app.put("/students/:id", (req, res) => {
  const id = req.params.id;
  const { name, role } = req.body;

  const newData = {
    name: name,
    role: role,
  };

  students = students.map((item, index) => {
    if (index === Number(id)) {
      return newData;
    }
    return item;
  });
  res.status(201).send(newData);
});

//Patch for edit name of student
app.patch("/students/:id", (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  students = students.map((item, index) => {
    if (index === Number(id)) {
      return { ...item, name: name };
    }
    return item;
  });
  res.status(201).send(newData);
});

app.delete("/students/:index", (req, res) => {
  const id = req.params.id;

  chooseData = students.findIndex((index) => index === Number(id));
  students.splice(chooseData, 1);
  res.status(200).send({ msg: `Data telah berhasil di hapus` });
});

// CRUD For Mentor.

//Get data form Mentors.
app.get("/mentors", (req, res) => {
  res.status(200).send(mentors);
});

//Post data to Mentors.
app.post("/mentors", (req, res) => {
  const newData = req.body;
  mentors.push(newData);
  res.status(201).send(newData);
});

//Put for update and edit all inside off object.
app.put("/mentors/:id", (req, res) => {
  const id = req.params.id;
  const { name, role } = req.body;

  const newData = {
    name: name,
    role: role,
  };

  mentors = mentors.map((item, index) => {
    if (index === Number(id)) {
      return newData;
    }
    return item;
  });
  res.status(201).send(newData);
});

//Patch for edit name of Mentors
app.patch("/mentors/:id", (req, res) => {
  const id = req.params.id;
  const { name } = req.body;

  mentors = mentors.map((item, index) => {
    if (index === Number(id)) {
      return { ...item, name: name };
    }
    return item;
  });
  res.status(201).send({ msg: "Berhasil Mengubah data" });
});

app.delete("/mentors/:index", (req, res) => {
  const id = req.params.id;

  chooseData = mentors.findIndex((index) => index === Number(id));
  mentors.splice(chooseData, 1);
  res.status(200).send({ msg: `Data telah berhasil di hapus` });
});

//CRUD for Courses

//Get data for Courses
app.get("/courses", (req, res) => {
  res.status(200).send(courses);
});

//Post data for Courses
app.post("/courses", (req, res) => {
  const newData = req.body;
  courses.push(newData);
  res.status(201).send(newData);
});

//Put to edit data from courses.
app.put("/courses/:id", (req, res) => {
  const id = req.params.id;
  const { name, dificulty } = req.body;

  const newData = {
    name: name,
    dificulty: dificulty,
  };

  courses = courses.map((item, index) => {
    if (index === Number(id)) {
      return newData;
    }
    return item;
  });
  res.status(201).send(newData);
});

//Patch for editing optional data.
app.patch("/courses/:id", (req, res) => {
  const id = req.params.id;
  const { dificulty } = req.body;

  dificulty = dificulty.map((item, index) => {
    if (index === Number(id)) {
      return { ...item, dificulty: dificulty };
    }
    return item;
  });
  res
    .status(201)
    .send({ msg: "Anda berhasil mengubah data Tingkat kesulitan" });
});

//Delete data form courses.
app.delete("/courses/:id", (req, res) => {
  const id = req.params.id;
  chooseData = courses.findIndex((index) => index === Number(id));
  courses.splice(chooseData, 1);
  res.status(200).send({ msg: "Selamat anda berhasil menghapus data." });
});

app.listen(3000, () => {
  console.log("Server Berjalan");
});
