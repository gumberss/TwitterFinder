const mongoose = require('mongoose');
let db = require('../models/twitter')

module.exports = {

    insert: (twitter) => {
        console.log("Salvando twitter")
        if (mongoose.connection.readyState)
            return db.create(twitter)
    },

    insertMany: (twitters) => {
        console.log("Salvando twitter")
        if (mongoose.connection.readyState)
            return db.insertMany(twitters)
    },

    getAll: () => {
        console.log("Salvando twitter")
        if (mongoose.connection.readyState)
            return db.find({});
    }
}