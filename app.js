const express = require('express');
const app = express()
const port = 4000;

const student = [
    {
        id: 1,
        nama: "Ganda Imas",
        role: "Student"
    },
    {
        id: 2,
        nama: "Kadek Dedy",
        role: "Student" 
    },
    {
        id: 3,
        nama: "Ihsan",
        role: "Mastah"
    }
]

const mentor = [
    {
        id: 1,
        nama: "Eddy Permana",
        bacth: "Fantastic"
    },
    {
        id: 2,
        nama: "Afista Pratama",
        bacth: "Fantastic"
    },
    {
        id: 3,
        nama: "Kak Lutfi",
        batch: "Fantastic"
    }
]

const course = [
    {
        id: 1,
        materi: "HTML",
        level: "Begginer"
    },
    {
        id: 2,
        materi: "CSS",
        level: "Medium"
    },
    {
        id: 3,
        materi: "Java Script",
        level: "Advance"
    }
]

//CRUD STUDENT
app.get('/student', (req, res) => {
    let listStudent = student.find(listStudent => listStudent.id === +req.params.id)
    res.send({ listStudent })
});

app.post('/student', (req, res) => {
    let { id, nama, role } = req.body;
    student.push({
        id,
        nama,
        role
    });
    res.status(201).send({
        message: "Success Post Student",
        student: { id, nama, role}
    })
});

app.put('/student/:id', (req, res) => {
    let { nama, role } = req.body;
    student = student.map(ls => {
        if(ls.id === +req.params.id) {
            return {
                id: ls.id,
                nama,
                role
            }
        } 
    })
    res.send({
        message: "succes to update student"
    })
})

app.delete('/student/:id', (req, res) => {
    let {id} = req.params;
    student = student.filter(el => el.id !== +id)
    res.send({
        message: "delete student success"
    })
});



//CRUD MENTOR
app.get('/mentors', (req, res) => {
    let listMentors = mentor.find(listMentors => listMentors.id === +req.params.id)
    res.send({ listMentors })
});

app.post('/mentors', (req, res) => {
    let { id, nama, batch } = req.body;
    mentor.push({ id, nama, batch });
    res.status(201).send({
        message: "succes post mentors",
        mentor: { id, nama, batch}
    })
});

app.put('/mentors/:id', (req, res) => {
    let { nama, role } = req.body;
    mentor = mentor.map(lm => {
        if(lm.id === +req.params.id) {
            return {
                id: lm.id,
                nama,
                role
            }
        } 
    })
    res.send({
        message: "succes to update student"
    })
})

app.delete('/mentors/:id', (req, res) => {
    let {id} = req.params;
    mentor = mentor.filter(el => el.id !== +id)
    res.send({
        message: "mentors delete succes"
    })
});



//CRUD COURSE
app.get('/course', (req, res) => {
    let listcourse = mentor.find(listcourse => listcourse.id === +req.params.id)
    res.send({ listcourse })
})

app.post('/course', (req, res) => {
    let { id, materi, level} = req.body;
    course.push({ id, materi, level});
    res.status(201).send({
        message: "succes post course",
        course: { id, materi, level}
    })
});

app.put('/course/:id', (req, res) => {
    let { nama, role } = req.body;
    coursse = course.map(lc => {
        if(lc.id === +req.params.id) {
            return {
                id: lc.id,
                nama,
                role
            }
        } 
    })
    res.send({
        message: "succes to update student"
    })
})

app.delete('/course/:id', (req, res) => {
    let {id} = req.params;
    course = course.filter(el => el.id !== +id)
    res.send({
        message: "course delete succes"
    })
});


app.listen(port, console.log('server is running'))