const { MongoClient } = require("mongodb");
const mongo = require('mongoose');
require('dotenv').config();
const connectionString = process.env.MONGO_STRING;
const { indexOf, findIndex } = require('lodash');
const { count } = require('console');


class mongoManager {
    client;
    dbString;
    collection;
    constructor(collection) {
        this.client = new MongoClient(process.env.MONGO_STRING);
        this.dbString = process.env.MONGO_DB;
        this.collection = collection;
    }
    async connect() {
        try {
            await  this.client.connect();
            await this.client.db(this.dbString);
        }
        catch(error){

        }
    }

    async findCollection(filter, paramToFind){
        if (this.dbString == undefined) {
            this.dbString = process.env.MONGO_DB;
            await this.client.db(this.dbString); 
        }
        const db = await this.client.db(this.dbString); 
        const col = await db.collection(this.collection).find({"user":"ionas"}).toArray();
        return col
    }
}

module.exports = {mongoManager}









