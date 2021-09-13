const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}))

let students = [
    {
        id: 1,
        name: "Ihsan",
        role: 'Belajar'
    },
    {
        id: 2,
        name: "Mulia",
        role: 'Belajar'
    },
    {
        id: 3,
        name: "Iqbal",
        role: 'Belajar'
    }
]

let mentors = [
    {
        id: 1,
        name: 'Eddy Permana',
        batch: 'Fantastic Falkor'
    },
    {
        id: 2,
        name: 'Afista Pratama',
        batch: 'Fantastic Falkor'
    },
    {
        id: 3,
        name: 'Luthfi Fitra',
        batch: 'Fantastic Falkor'
    }
]


let courses = [
    {
        id: 1,
        nama: 'HTML Dasar',
        kesulitan: 'Mudah'
    }
]

app.get('/students', (req, res) => {
    res.status(200).json({
        msg: 'success',
        students
    })
});

app.get('/students/:id', (req, res) => {
    const data = students[req.params.id - 1]
    res.status(200).json({
        data
    })
})

app.get('/mentors', (req, res) => {
    res.status(200).json({
        msg: 'success',
        mentors
    })
});

app.get('/mentors/:id', (req, res) => {
    const data = mentors[req.params.id - 1]
    res.status(200).json({
        data
    })
})

app.get('/courses', (req, res) => {
    res.status(200).json({
        msg: 'success',
        courses
    });
});

app.get('/courses/:id', (req, res) => {
    const data = courses[req.params.id - 1]
    res.status(200).json({
        data
    })
})


app.post('/mentors', (req, res) => {
    mentors.push({...req.body, id: mentors.length + 1});
    res.status(201).json({
        msg: 'success',
        mentors
    })
});

app.post('/courses', (req, res) => {
    courses.push({...req.body, id: courses.length + 1});
    res.status(201).json({
        msg: 'success',
        courses
    })
});

app.post('/students', (req, res) => {
    students.push({...req.body, id: students.length + 1});
    res.status(201).json({
        msg: 'success',
        students
    })
});

app.patch('/mentors/:id', (req, res) => {
    const index = req.params.id - 1;
    mentors[index] = {...mentors[index], ...req.body}
    res.status(201).json({
        status: 'success',
        mentors
    })
})

app.patch('/students/:id', (req, res) => {
    const index = req.params.id - 1;
    students[index] = {...students[index], ...req.body}
    res.status(201).json({
        status: 'success',
        students
    })
})

app.patch('/courses/:id', (req, res) => {
    const index = req.params.id - 1;
    courses[index] = {...courses[index], ...req.body}
    res.status(201).json({
        status: 'success',
        courses
    })
});

app.put('/students/:id', (req, res) => {
    const index = req.params.id - 1;
    students[index] = {...req.body};
    res.status(201).json({
        status: 'success',
        students
    })
})

app.put('/mentors/:id', (req, res) => {
    const index = req.params.id - 1;
    mentors[index] = {...req.body};
    res.status(201).json({
        status: 'success',
        mentors
    })
});

app.put('/courses/:id', (req, res) => {
    const index = req.params.id - 1;
    courses[index] = {...req.body};
    res.status(201).json({
        status: 'success',
        courses
    })
});

app.delete('/students/:id', (req, res) => {
    students = students.filter(el => el.id !== +req.params.id);
    res.status(200).json({
        status: 'success',
        students
    })
})

app.delete('/mentors/:id', (req, res) => {
    mentors = mentors.filter(el => el.id !== +req.params.id);
    res.status(200).json({
        status: 'success',
        mentors
    })
})

app.delete('/courses/:id', (req, res) => {
    courses = courses.filter(el => el.id !== +req.params.id);
    res.status(200).json({
        status: 'success',
        courses
    })
})


app.listen(3000, () => console.log('running'))