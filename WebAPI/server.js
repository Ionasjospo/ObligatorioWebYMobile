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


app.use(function (req, res, next) {
  if (req.url.toString().includes('login')) {
    next();
  } else {
    try {

      var jwtToken = req.headers["authorization"];
      //console.log(jwtToken);
      var itsValid = jwt.verify(jwtToken, SECRET);
      if (itsValid) {
        next();
      }
      else {
        res.send({ "data": 'Invalid Token' });
      }

    } catch (error) {
      res.send({ "data": error });
    }
  }


});



app.get('/', (req, res) => {
  res.send('Welcome to our Windmill API ');
});


app.get('/pieces', async (req, res) => {
  const mongoManager = new mdbM.mongoManager("pieces");
  const db = await mongoManager.connect();

  let pieces = await mongoManager.getOneCollection();

  res.send(pieces);
});

app.get('/windmillToValidate', async (req, res) => {
  const mongoManager = new mdbM.mongoManager("windmillToValidate");
  const db = await mongoManager.connect();

  let windmills = await mongoManager.getOneCollection();

  res.send(windmills);
});

app.post("addWindmill", async (req, res) => {
    const mongoManager = new mdbM.mongoManager("windmillToValidate");
    const db = await mongoManager.connect();
    console.log("dcfdsf"+req.headers)
    await mongoManager.insertElement(req.headers);
    res.json("ok");

});

app.post("/register", async (req, res) => {
  //try {
  // hash the password
  let username = req.body.username;
  req.body.password = await bcrypt.hash(req.body.password, 10);
  // create a new user
  const mongoManager = new mdbM.mongoManager("users");
  const db = await mongoManager.connect();
  let user = await mongoManager.findCollectionAndElement("username", username);

  if (user.length != 0) {
    console.log("Username already exists!");
  } else {
    await mongoManager.insertElement(req.body);
    // send new user as response
    res.json("ok");
    console.log(req.body);
    console.log("Registered!");

    // } catch (error) {
    //   res.status(400).json({ error });
    // }

  }

});
var actualUser;
app.get("/actualUser", (req, res) => {
  try {
    res.send(actualUser);
  } catch (error) {
    res.status(200).json({ error: "Undefined User" });
  }

})

app.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const mongoManager = new mdbM.mongoManager("users");
  const db = await mongoManager.connect();
  let user = await mongoManager.findCollectionAndElement("username", username);
  actualUser = user;
  if (undefined || user.length != 0) {

    const result = await bcrypt.compare(req.body.password, user[0].password);

    if (result) {
      const token = await jwt.sign({ username: user.username /*, role:user[0].role */ }, SECRET);
      //console.log(token);
      // res.json({ token });
      res.send(
        {
          user: user[0], //cambiar user solo por rol asi no va la pass encriptada
          jwtToken: token
        }

      );

    } else {
      res.status(200).json({ error: "User or password lkj incorrect. Try again." });
    }
  }
  else {
    res.status(200).json({ error: "User or password lkjh incorrect. Try again." });
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