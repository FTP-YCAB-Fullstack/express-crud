const express = require('express');


const app = express()


let siswa=[];
let id=0;

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.get('/siswa', function(req, res){
    res.send(siswa)
});

app.post('/siswa', (req, res) => {
    const { id, name, role } = req.body;

    let newSiswa = {
        id: siswa.length +1,
        name,
        role,
    };
    siswa.push(newSiswa)
    if(name&&role != null){
        res.status(201).json({
            message: 'sukses menambah data'
        })
    }else{
        res.status(404).json({
            message: 'field masih kosong'
        })
    }
});

app.get('/siswa/:id', (req,res)=>{
    const {id} = req.params;

    const foundSiswa = siswa.find((newSiswa) => newSiswa.id === id);
    res.send(foundSiswa)
});

app.delete('/siswa/:id', (req, res)=>{
    const {id} = req.params;

    siswa = siswa.filter((user)=> user.id !== id);
    res.send(`siswa delete dari database ${siswa}`);
})

app.patch('/siswa/:id', (req, res)=>{
    const id = req.params.id -1;
    const {name, role} = req.body
    
    const user = siswa.find((user) => user.id === id);
    
    const editted={
        name,
        role
    }

    siswa[id] = {...siswa[id], ...editted}
        res.send(200).json({
            status: 'sukses patch data',
            data: siswa[id]
        })

})

app.put('/siswa/:id', (req, res)=>{
    // const{id} = req.params;
    const id = req.params.id -1;
    const{name, role} = req.body;

    const siswaNew = {
        id: siswa.length *1,
        name,
        role
    }
    siswa[id] = {...siswaNew};

    
    res.status(200).json({
        message: 'sukses update',
        data: siswa[id]
    })


})
app.listen(3000, ()=> console.log('server running'))
