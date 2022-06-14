const Article = require('../models/Article.model');

class ArticleService{
    // get all articles
    static async getAllArticles(){
        try{
            const allArticles = await Article.find();
            let response={} 
            response.data = allArticles;
            response.status = 200;
            response.message = "";
            return response;
        }
        catch (error){
            console.log(`Could not fetch articles, ${error}`);
        }
    }

    // create new article
    static async createArticle(data){
        try{
            const newArticle = {
                title:data.body.title,
                body:data.body.body,
                article_image:data.body.article_image
            }
            const response = await new Article(newArticle).save();
            return response;
        }
        catch (error){
            console.log(`Could not create an article, ${error}`);
        }
    }

    // get article by in id
    static async getArticleById(articleId){
        try{
            const singleArticleResponse  = await Article.findById(articleId);
            return singleArticleResponse ;
        }
        catch(error){
            console.log(`Article not found, ${error}`);
        }
    }

    // update article by in id
    static async updateArticleById(id, comment){
        try{

            // const updateArticleResponse = await Article.updateOne({_id:id},{$set: { title:comment.title, body:comment.body, article_image:comment.article_image }})
            const updateArticleResponse = await Article.findOneAndUpdate({_id:id},{$set: { title:comment.title, body:comment.body, article_image:comment.article_image }})
            // const updateArticleResponse = await Article.findByIdAndUpdate(id,{title:comment.title,body:comment.body,article_image:comment.article_image},function(err,result){
            //     if (err) {
            //         return err;
            //     } else {
            //         return result;
            //     }
            // }).clone().catch(function(err){ console.log(err)})
            return updateArticleResponse;
        }
        catch(error){
            console.log(`Could not update article , ${error}`);
        }
    }

    // delete article by in id
    static async deleteArticleById(articleId){
        try{
            // const deletedResponse = await Article.findOneAndDelete(articleId);
            const deletedResponse = await Article.findByIdAndDelete(articleId);
            return deletedResponse;
        }
        catch(error){
            console.log(`Could  ot delete article , ${error}`);
        }
    }
}

module.exports = ArticleService;