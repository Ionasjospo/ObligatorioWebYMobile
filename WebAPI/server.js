'use strict';

const express = require('express');
const cors = require('cors');
const path = require('path');
const mdbM = require('./dbManager.js');
require("dotenv").config()
const morgan = require("morgan")
const { log } = require("mercedlogger")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ObjectID = require('mongodb').ObjectId;


const { SECRET = "secret" } = process.env;


// Constants
// const PORT = 8090;
const { PORT = 3000 } = process.env
const HOST = '0.0.0.0';

// App
const app = express();
var corsOptions = { //cross domain
  origin: ['http://localhost:4200', 'http://localhost:8100', 'http://localhost:8101'],
  optionsSuccessStatus: 200,
  methods: "GET, POST, PUT, DELETE"
}

app.use(morgan("tiny"))
app.use(cors(corsOptions));
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));

app.get('/', (req, res) => {
  res.send('Welcome to our Windmill API ');
});


//Login 

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

app.post("/login", async (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  const mongoManager = new mdbM.mongoManager("users");
  const db = await mongoManager.connect();
  let user = await mongoManager.findCollectionAndElement("username", username);
  if (undefined || user.length != 0) {

    const result = await bcrypt.compare(req.body.password, user[0].password);

    if (result) {
      const token = await jwt.sign({ username: user.username , role:user[0].role }, SECRET, {expiresIn: '12h'});
      
      res.send(
        {
          user: user[0], 
          role: user.role,
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


//Register User

app.post("/register", async (req, res) => {
  // hash the password
  let username = req.body.username;
  req.body.password = await bcrypt.hash(req.body.password, 10);
  // create a new user
  const mongoManager = new mdbM.mongoManager("users");
  const db = await mongoManager.connect();
  let user = await mongoManager.findCollectionAndElement("username", username);

  if (user.length != 0) {
    res.json("Username already exists!");
  } else {
    await mongoManager.insertElement(req.body);
    res.json("Registered!");
  }

});

app.get('/users', async (req, res) => {
  const mongoManager = new mdbM.mongoManager("users");
  const db = await mongoManager.connect();

  let users = await mongoManager.getOneCollection();

  res.send(users);
});


//Get all Pieces
app.get('/pieces', async (req, res) => {
  const mongoManager = new mdbM.mongoManager("pieces");
  const db = await mongoManager.connect();

  let pieces = await mongoManager.getOneCollection();

  res.send(pieces);
});

//Add new piece to catalogue

app.post('/newPiece', async(req, res)  =>{
  const mongoManager = new mdbM.mongoManager("pieces");
  const db = await mongoManager.connect();
  await mongoManager.insertElement(req.body);
  console.log("quedo");
  res.json("ok");
})


//Delete a piece from catalogue

app.post('/deletePieces', async (req, res) => {
  const mongoManager = new mdbM.mongoManager("pieces");
  const db = await mongoManager.connect();
  
  var objectId = new ObjectID(req.body._id);
  let piece = await mongoManager.deletePiece({"_id": objectId});

  res.json("ok");
});


//Table of validated designs

// app.post('/validatedWindmills', async(req, res)  =>{
//   const mongoManager = new mdbM.mongoManager("validatedWindmills");
//   const db = await mongoManager.connect();
//   await mongoManager.insertElement(req.body);
//   res.json("ok");
// })



//Table of designs to validate

app.get('/getWindmillToValidate', async (req, res) => {
  const mongoManager = new mdbM.mongoManager("windmillToValidate");
  const db = await mongoManager.connect();
  let windmills = await mongoManager.getOneCollection();

  res.send(windmills);
});

//Table of valid designs

app.get('/getValidWindmills', async (req, res) => {
  const mongoManager = new mdbM.mongoManager("validWindmills");
  const db = await mongoManager.connect();
  let windmills = await mongoManager.getOneCollection();

  res.send(windmills);
});


//Table of invalid designs

app.get('/getInvalidWindmills', async (req, res) => {
  const mongoManager = new mdbM.mongoManager("invalidWindmills");
  const db = await mongoManager.connect();

  let windmills = await mongoManager.getOneCollection();

  res.send(windmills);
});

//Add a new design

app.post("/addWindmill", async (req, res) => {
    const mongoManager = new mdbM.mongoManager("windmillToValidate");
    const db = await mongoManager.connect();
    await mongoManager.insertElement(req.body);
    res.json("ok");
});

//To remove from the ToValid table

app.post("/alreadyValidated", async (req, res) => {
  const mongoManager = new mdbM.mongoManager("windmillToValidate");
  const db = await mongoManager.connect();
  var objectId = new ObjectID(req.body._id);
  let piece = await mongoManager.deleteElement({"_id": objectId});
  
 
  res.redirect("/validation-table")
});

//Valid a design

app.post("/ValidateWindmill", async (req, res) => {
  let mongoManager = new mdbM.mongoManager("validWindmills");
  let db = await mongoManager.connect();
  await mongoManager.insertElement(req.body);

  mongoManager = new mdbM.mongoManager("windmillToValidate");
  db = await mongoManager.connect();
  var objectId = new ObjectID(req.body._id);
  
  let piece = await mongoManager.deleteElement({"_id": objectId});
  
  res.json("ok");
});


//Reject/invalid a design


app.post("/rejectWindmill", async (req, res) => {
  let mongoManager = new mdbM.mongoManager("invalidWindmills");
  let db = await mongoManager.connect();
  await mongoManager.insertElement(req.body);
  
  mongoManager = new mdbM.mongoManager("windmillToValidate");
  db = await mongoManager.connect();
  var objectId = new ObjectID(req.body._id);
  
  let piece = await mongoManager.deleteElement({"_id": objectId});
  
  res.json("ok");
});




// APP LISTENER
app.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))
// app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);