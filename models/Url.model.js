const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UrlSchema = new Schema({
    url:{
        type: String,
        required:true
    },
    shorten_url:{
        type: String,
        unique: true
    },
    code:{
        type: String,
    },
    user:{
        type: String
    },
    date:{
        type:Date,
        default:Date.now
    },
});

const Url = mongoose.model('Url',UrlSchema)
module.exports = Url