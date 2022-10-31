const { MongoClient } = require("mongodb");
const mongo = require('mongoose');
require('dotenv').config();
const connectionString = process.env.MONGO_STRING;
const { indexOf, findIndex } = require('lodash');
const { count } = require('console');


class mongoManager {
    client;
    db;
    collection;
    constructor(collection) {
        this.client = new MongoClient(process.env.MONGO_STRING);
        this.db = process.env.MONGO_DB;
        this.collection = collection;
    }
    async connect() {
        try {
            await  this.client.connect();
            await this.client.db(this.db);
            // const usersCollection = database.collection("users");
            // const piecesCollection = database.collection("pieces");

        }
        catch(error){

        }
    }

    async findCollection(filter, paramToFind){
        //console.log(db)
        // if (db == undefined) {
        //     this.db = process.env.MONGO_DB;
        //     await this.client.db(this.db); 
        // }
        const col = await this.client.db(this.collection).toArray();
        
        return col.find({"user" : "ionas"})
        // ({ "user": username })
    }
}
// let userCollection = db.collections("users")
// let user = await usersCollection.find({ "user":
module.exports = {mongoManager}









