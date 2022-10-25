'use strict';

const express = require('express');
const cors = require('cors');
const _ = require('lodash'); //
const { v4: uuidv4 } = require('uuid');
// Constants
const PORT = 8090;
const HOST = '0.0.0.0';

// App
const app = express();
var corsOptions = { //cross domain
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200, 
    methods: "GET, POST, PUT, DELETE"
}
app.use(express.json())
app.use(cors(corsOptions));

let piecesList = [];
let usersList = [
  {username: 'ionas', password: 'ionas'}
];
 
app.get('/', (req, res) => {
  res.send('Welcome to our Windmill API ');
});

app.get('/users', (req, res) => {
  res.send(usersList);
});

app.get('/pieces', (req, res) => {
    res.send(itemsList);
  });

app.post('/pieces', (req, res) => {   
  let card = {
    id: uuidv4().toString(),
    text: req.body.text
  }
  cards.push(card) 
  res.send(card);
});

app.put('/card/:id', (req, res) => {    
  let card = {
    id: req.params['id'],
    text: req.body.text
  }
  _.remove(cards, (elem)=>{  //es como un for, le paso la lista, y lo que hacer por cada elemento
    return elem.id == req.params['id']    
  });
  cards.push(card);
  res.send(card);
});

app.delete('/card/:id', (req, res) => {    
  _.remove(cards, (elem)=> {
    return elem.id == req.params['id']    
  });
  res.send(cards);
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);