const ArticleService = require('../services/ArticleService');

class Article{
    // apiGetAllArticles
    static async apiGetAllArticles(req,res,next){
        try{
            const articles = await ArticleService.getAllArticles();
            if(!articles){
                res.status(404).json('There are no article published yet!');
            }
            res.json(articles);
        }
        catch (error) {
            res.status(500).json({error: error})
        }
    }

    // apiGetArticleById
    static async apiGetArticleById(req,res,next){
        try{
            let id  = req.params.id;
            const article = await ArticleService.getArticleById(id)

            if(!article){
                res.status(404).json('Article not found!');
            }
            res.json(article);
        }
        catch (error){
            res.status(500).json({error: error})
        }
    }

    // apiCreateNrewArticle
    static async apiCreateNewArticle(req,res,next){
        try{
            const createdArticle = await ArticleService.createArticle(req);
            res.json(createdArticle);
        }
        catch (error){
            res.status(500).json({error: error})
        }
    }

    // apiUpdateArticle
    static async apiUpdateArticle(req,res,next){
        try{
            let articleId  = req.params.id;
            const comment = {};
            comment.title = req.body.title;
            comment.body = req.body.body;
            comment.article_image = req.body.article_image;
            const updatedArticle = await ArticleService.updateArticleById(articleId,comment);
            if(updatedArticle.modifiedCount === 0 ){
                throw new Error("Unable to update article, error occord");
            }
            res.json(updatedArticle);

        }
        catch (error){
            res.status(500).json({error: error})
        }
    }

    // apiDeleteArticle
    static async apiDeleteArticle(req, res, next){
        try {
           let articleId = req.params.id;
           console.log(articleId)
           const deleteResponse =  await ArticleService.deleteArticleById(articleId)
           res.json(deleteResponse);
        } catch (error) {
           res.status(500).json({error: error})
        }
    }
}




module.exports = Article