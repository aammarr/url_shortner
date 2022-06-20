const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NftSchema = new Schema({
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

const Nft = mongoose.model('Nft',NftSchema)
module.exports = Nft