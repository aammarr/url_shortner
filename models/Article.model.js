const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    article_image:{
        type: String,
        required: false
    },
    date:{
        type: Date,
        default: Date.now,
    },
}); 



const Article = mongoose.model('Artcle',ArticleSchema)
module.exports = Article