'use strict';

const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { indexOf, findIndex } = require('lodash');
const { count } = require('console');
//import { mongoManager } from './dbManager';
const mdbM = require('./dbManager.js');


// const jwt = require('jsonwebtoken');

// sign with RSA SHA256
// var privateKey = fs.readFileSync('private.key');
// var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});


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


app.get('/', (req, res) => {
  res.send('Welcome to our Windmill API ');
});

app.get('/pieces', async(req, res) => {
  const mongoManager = new mdbM.mongoManager("pieces");
  const db = await mongoManager.connect();
  
  let pieces = await mongoManager.getOneCollection();
  res.send(pieces);
});

app.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const mongoManager = new mdbM.mongoManager("users");
  const db = await mongoManager.connect();
  
  let user = await mongoManager.findCollectionAndElement("user", username);
  
  if (undefined || user.length!= 0) {
    if (user[0].pass == password) {
      res.send({user: user[0]}); //agregar token cuando lo hagamos
    } else {
      res.status(401).json({ error: "User or password incorrect. Try again." });
    }
  }
  else {
    res.status(401).json({ error: "User or password incorrect. Try again." });
  }



});


// app.post('/pieces', (req, res) => {
//   let card = {
//     id: uuidv4().toString(),
//     text: req.body.text
//   }
//   cards.push(card)
//   res.send(card);
// });

// app.put('/card/:id', (req, res) => {
//   let card = {
//     id: req.params['id'],
//     text: req.body.text
//   }
//   _.remove(cards, (elem) => {  //es como un for, le paso la lista, y lo que hacer por cada elemento
//     return elem.id == req.params['id']
//   });
//   cards.push(card);
//   res.send(card);
// });

// app.delete('/card/:id', (req, res) => {
//   _.remove(cards, (elem) => {
//     return elem.id == req.params['id']
//   });
//   res.send(cards);
// });


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);