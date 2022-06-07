const express = require('express');
const router = express.Router();
const ArticleController = require('../controllers/article.controller');

router.get('/articles/',ArticleController.apiGetAllArticles);
router.post('/article',ArticleController.apiCreateNewArticle);
router.get('/article/:id',ArticleController.apiGetArticleById);
router.put('/article/:id',ArticleController.apiUpdateArticle);
router.delete('/article/:id',ArticleController.apiDeleteArticle);

module.exports = router;