'use strict';

const express =  require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());

const student = ['nama, role'];

app.get('/', (req,res) => {
    res.status(200).send({
        msg: student,
    });
});

// res.json({
//     'success'
// });


app.listen(3000, () => console.log('server running'));