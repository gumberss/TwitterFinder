var mongoose = require('mongoose');

var schema = mongoose.Schema({
    content: { 
        type: String, 
        required: true
    }, 
    createdDate: {
        required: true,
        type: Date,
    }, 
    language: {
        required: true,
        type: String        
    },
    hashtags: {
        required: true,
        type: []        
    },
    user: {
        required: true,
        type: []        
    }

});

module.exports = mongoose.model('Twitter', schema);