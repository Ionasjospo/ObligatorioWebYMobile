'use strict';

const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const { indexOf, findIndex } = require('lodash');
const { count } = require('console');
const mdbM = require('./dbManager.js');
require("dotenv").config()
const morgan = require("morgan")
const { log } = require("mercedlogger")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


const { SECRET = "secret" } = process.env;


// Constants
// const PORT = 8090;
const { PORT = 3000 } = process.env
const HOST = '0.0.0.0';

// App
const app = express();
var corsOptions = { //cross domain
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200,
  methods: "GET, POST, PUT, DELETE"
}
app.use(express.json())
app.use(morgan("tiny"))
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

app.post("/signup", async (req, res) => {
  //try {
  // hash the password
  req.body.password = await bcrypt.hash(req.body.password, 10);
  // create a new user
  const mongoManager = new mdbM.mongoManager("users");
  const db = await mongoManager.connect();


  await mongoManager.insertElement(req.body);
  // send new user as response
  res.json("ok");
  console.log(req.body);
  // } catch (error) {
  //   res.status(400).json({ error });
  // }
});

app.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const mongoManager = new mdbM.mongoManager("users");
  const db = await mongoManager.connect();
  let user = await mongoManager.findCollectionAndElement("username", username);
  
  if (undefined || user.length != 0) {

    const result = await bcrypt.compare(req.body.password, user[0].password);
    
    if (result) {
      const token = await jwt.sign({ username: user.username }, SECRET);
      console.log(token);
      // res.json({ token });
      res.send(
        {
          user: user[0],
          jwtToken: token
        }
      ); 
    } else {
      res.status(200).json({ error: "User or password incorrect. Try again." });
    }
  }
  else {
    res.status(200).json({ error: "User or password incorrect. Try again." });
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

// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))
// app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);