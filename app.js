const express = require("express");

const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Helo back-end");
});

let student = [
  {
    name: "Dedy",
    role: "Student",
  },
];

app.get("/student", (req, res) => {
  res.send({
    student,
  });
});

app.post("/student", (req, res) => {
  const neW = {};
  student.push(neW);
  res.status(201).send({
    pesan: "berhasil",
    neW,
  });
});

app.put("/student/:id", (req, res) => {
  const neW = req.body;
  student = student.map((item, index) => {
    if (Number(req.params.id) === index) {
      return {
        name: "latif",
        role: "student",
      };
    }
    return item;
  });

  res.status(201).send(neW);
});

app.delete("/student/:id", (req, res) => {
  res.status(204).send(
    student.filter((item, index) => {
      if (Number(req.params.id) === index) {
        return (student = student.slice(1));
      }
      return item;
    })
  );
});


// masih belum ngerti cara penggunaan patch nya
app.patch("/student/:id",(req,res)=>{
  const neW = req.body
   student.map((item,index)=>{
     if (Number(req.params.id)=== index) {
        return {add:"add"}
     }
     return item
   })
   student = student.push(neW)
   res.send(neW)
})


// mentor
let mentor = [
  {
    nama: "Eddy",
    bacth: "Mentor",
  },
  {
    nama: "Lufti",
    bacth: "Mentor",
  },
  {
    nama: "Afis",
    bacth: "Mentor",
  },
];

app.get("/mentor", (req, res) => {
  res.send({
    mentor,
  });
});

app.post("/mentor", (req, res) => {
  const neWmentor = {};
  mentor.push(neWmentor);
  res.status(201).send(mentor);
});

app.put("/mentor/:id", (req, res) => {
  mentor = mentor.map((item, index) => {
    if (Number(req.params.id) === index) {
      return {
        nama: "avis",
        bacth: "menthor",
      };
    }
    return item;
  });
  res.status(201).send(mentor);
});

app.delete("/mentor/:id", (req, res) => {
  res.send(
    mentor.filter((item, index) => {
      if (Number(req.params.id) === index) {
        return (mentor = mentor.slice(1));
      }
      return item;
    })
  );
});

let course = [
  {
    namaCourse: "html",
    tingkatKesulitan: "medium",
  },
  {
    namaCourse: "css",
    tingkatKesulitan: "medium",
  },
  {
    namaCourse: "NodeJs dan ExpressJs",
    tingkatKesulitan: "hard",
  },
];

app.get("/course", (req, res) => {
  res.send(course);
});

app.post("/course", (req, res) => {
  const neWcourse = {};
  course.push(neWcourse);
  res.status(201).send(course);
});

app.put("/course/:id", (req, res) => {
  course = course.map((item, index) => {
    if (Number(req.params.id) === index) {
      return {
        namaCourse: "JavaScript",
        tingkatKesulitan: "menthor",
      };
    }
    return item;
  });
  res.status(201).send(course);
});

app.delete("/course/:id", (req, res) => {
  res.send(
    course.filter((item, index) => {
      if (Number(req.params.id) === index) {
        return (course = course.slice(1));
      }
      return item;
    })
  );
});


app.listen(port, () => {
  console.log(`server localhost${port}`);
});
