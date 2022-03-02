const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    return res.status(200).json({
        data: [
            {
                id: 1,
                name: 'Post 1'
            },
            {
                id: 2,
                name: 'Post 2'
            }
        ]
    });
});

app.post('/', (req, res) => {

    var {data} = req.body.data; 
    

    let body = {...data, name:"Aline e Hugo"};

    console.log(body);
    //body.data.name = body.data.name + ' - SEND';

    return res.status(200).json({
        data: body 
    });
});

app.listen(9000, () => console.log('Started'));
