const express = require('express');
const bodyParser = require('body-parser');

const app = express()


const siswa=[
    {
        id: 1,
        name: 'wirahadi',
        role: 'student'
    },
    {
        id:2,
        name: 'ihsan',
        role: 'student'
    },
    {
        id:3,
        name: 'iqbal',
        role: 'student'
    }
];

const mentor=[
    {
        id: 1,
        name:'mas eddy',
        batch: 'fantastic falkour'
    },
    {
        id: 2,
        name:'mas afis',
        batch:'fantastic falkour'
    },
    {
        id:3,
        name: 'mas luthfi',
        batch: 'fantastic falkour'
    }
]

const course=[
    {
        id: 1,
        namaCourse: 'javascript',
        tingkatKesulitan: 'sangat susah'
    },
    {
        id:2,
        namaCourse: 'html',
        tingkatKesulitan: 'menengah',
    },
    {
        id:3,
        namaCourse: 'reactjs',
        tingkatKesulitan: 'menengah',
    }
];

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.status(200).json(siswa);
});

app.get('/siswa/:siswaId', (req, res) => {
    res.status(200).json(siswa.filter((siswa)=> siswa.id === +req.params.siswaId));
})

app.post('/addsiswa', (req, res) => {
    // const { id, name } = req.body;

    let newSiswa = {
        "id": req.body.id,
        "name": req.body.name,
        "role": req.body.role,
    };
    siswa.push(newSiswa)

    // res.status(201).json({
    //     message: 'Success post new data',
    //     siswa: newSiswa,
    // });
    res.status(201).json(newSiswa)
    res.send(newSiswa)
});

app.put('/editSiswa/:id', (req, res)=>{

    let found = siswa.find(function(item){
        return item.id === parseInt(+req.params.id);
    });

    if(found){
        let updated = {
            id: found.id,
            name: req.body.name,
            role: req.body.role
        };

        let targetIndex = siswa.indexOf(found);
    
        // siswa.splice(targetIndex, found.id, updated);
        siswa.splice(targetIndex, 3, updated)
        res.sendStatus(204);
    }else{
        res.sendStatus(404)
    }
    

})
app.listen(3000, ()=> console.log('server running'))
