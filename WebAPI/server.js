'use strict';

const express = require('express');
const cors = require('cors');
const _ = require('lodash'); 
const { v4: uuidv4 } = require('uuid');
const mongo = require('mongoose');
const path = require('path');
const { MongoClient } = require("mongodb");
const jwt = require('jsonwebtoken');

// sign with RSA SHA256
var privateKey = fs.readFileSync('private.key');
var token = jwt.sign({ foo: 'bar' }, privateKey, { algorithm: 'RS256'});

// Replace the uri string with your connection string.
const uri =
  "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
    try {              
        const database = client.db("Windmill"); 
        const personCollection = database.collection("users"); 
      
        if ((await personCollection.countDocuments()) === 0) {
          console.log("No hay documentos!");
        } else{
        const findResult1 = await personCollection.find({},{ projection: { _id: 0, user: 1, pass: 1 }}).toArray();
        console.log('usuarios: ',findResult1);
        }

       }
      
       // Close connection
       finally {
        await client.close();
       }
      
      }
      
      run().catch(console.dir);


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

let piecesList = [
  { id: 1, type: "Type.Blades", title: "Super aspas", img: "../../assets/blades.jpg", material: "Metal", height: "100", resistance: "Resistance.Low"},
  { id: 2, type: "Type.Base", title: "La mejor base", img: "../../assets/body.jpg", material: "Metal", height: "200", resistance: "Resistance.Strong"},
  { id: 3, type: "Type.Body", title: "Motorazo 5.0 biturbo", img: "../../assets/egine.jpg", material: "Metal", height: "95", resistance: "Resistance.Medium"},
  { id: 4, type: "Type.Base", title: "La mejor base", img: "../../assets/body.jpg", material: "Metal", height: "200", resistance: "Resistance.Strong"},
  { id: 5, type: "Type.Blades", title: "Super aspas", img: "../../assets/blades.jpg", material: "Metal", height: "100", resistance: "Resistance.Low"}
];
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
    res.send(piecesList);
  });

app.post("/login", (req, res) => {

});


// app.post('/pieces', (req, res) => {   
//   let card = {
//     id: uuidv4().toString(),
//     text: req.body.text
//   }
//   cards.push(card) 
//   res.send(card);
// });

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