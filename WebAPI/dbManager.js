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

    async findCollectionAndElement(collection, paramToFind){
        if (this.dbString == undefined) {
            this.dbString = process.env.MONGO_DB;
            await this.client.db(this.dbString); 
        }
        let filter = {};
        filter[collection] = paramToFind;
        const db = await this.client.db(this.dbString); 
        const col = await db.collection(this.collection).find(filter).toArray();
        return col
    }
    async getOneCollection(){
        if (this.dbString == undefined) {
            this.dbString = process.env.MONGO_DB;
            await this.client.db(this.dbString); 
        }
        const db = await this.client.db(this.dbString); 
        var col = await db.collection(this.collection).find({}).toArray();
        return col
    }
    async insertElement(element)
    {
        if (this.dbString == undefined) {
            this.dbString = process.env.MONGO_DB;
            await this.client.db(this.dbString); 
        }
        const db = await this.client.db(this.dbString); 
        const col = await db.collection(this.collection).insertOne(element);
        return col
    }
}

module.exports = {mongoManager}









