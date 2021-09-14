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
    let {name, batch} = req.body;
    let newObj = {
        id: mentors.length + 1,
        name,
        batch
    }
    mentors.push(newObj);
    res.status(201).json({
        msg: 'success',
        mentors
    })
});

app.post('/courses', (req, res) => {
    let {nama, kesulitan} = req.body;
    let newObj = {
        id: courses.length + 1,
        nama,
        kesulitan
    }
    courses.push(newObj);
    res.status(201).json({
        msg: 'success',
        courses
    })
});

app.post('/students', (req, res) => {
    let {name, role} = req.body;
    let newObj = {
        id: students.length + 1,
        name,
        role
    }
    students.push(newObj);
    res.status(201).json({
        msg: 'success',
        students
    })
});

app.patch('/mentors/:id', (req, res) => {
    const index = req.params.id - 1;
    let {name, batch} = req.body;
    const newEdited = {
        name,
        batch
    }
    for (let undef in newEdited) {
        if (!newEdited[undef]) delete newEdited[undef]
    }
    mentors[index] = {...mentors[index], ...newEdited}
    res.status(200).json({
        status: 'success',
        data: mentors[index]
    })
})

app.patch('/students/:id', (req, res) => {
    const index = req.params.id - 1;
    let {name, role} = req.body;
    const newEdited = {
        name,
        role
    }
    for (let undef in newEdited) {
        if (!newEdited[undef]) delete newEdited[undef]
    }
    students[index] = {...students[index], ...newEdited}
    res.status(200).json({
        status: 'success',
        data: students[index]
    })
})

app.patch('/courses/:id', (req, res) => {
    const index = req.params.id - 1;
    let {nama, kesulitan} = req.body;
    const newEdited = {
        nama,
        kesulitan
    }
    for (let undef in newEdited) {
        if (!newEdited[undef]) delete newEdited[undef]
    }
    courses[index] = {...courses[index], ...newEdited}
    res.status(200).json({
        status: 'success',
        data: courses[index]
    })
});

app.put('/students/:id', (req, res) => {
    const index = req.params.id - 1;
    let {name, role} = req.body;
    const newObj = {
        id: req.params.id * 1,
        name,
        role
    }
    students[index] = {...newObj};
    res.status(200).json({
        status: 'success',
        data: students[index]
    })
})

app.put('/mentors/:id', (req, res) => {
    const index = req.params.id - 1;
    let {name, batch} = req.body;
    const newObj = {
        id: req.params.id * 1,
        name,
        batch
    }
    mentors[index] = {...newObj};
    res.status(200).json({
        status: 'success',
        data: mentors[index]
    })
});

app.put('/courses/:id', (req, res) => {
    const index = req.params.id - 1;
    let {nama, kesulitan} = req.body;
    const newObj = {
        id: req.params.id * 1,
        nama,
        kesulitan
    }
    courses[index] = {...newObj};
    res.status(200).json({
        status: 'success',
        data: courses[index]
    })
});

app.delete('/students/:id', (req, res) => {
    students = students.filter(el => el.id !== +req.params.id);
    res.status(204).json({})
})

app.delete('/mentors/:id', (req, res) => {
    mentors = mentors.filter(el => el.id !== +req.params.id);
    res.status(200).json({})
})

app.delete('/courses/:id', (req, res) => {
    courses = courses.filter(el => el.id !== +req.params.id);
    res.status(204).json({})
})


app.listen(3000, () => console.log('running'))