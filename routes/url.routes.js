const express = require('express');
const router = express.Router();
const UrlController = require('../controllers/url.controller');


router.get('/urls',UrlController.apiGetAllUrls);
router.post('/url',UrlController.apiCreateNewShortUrl);
router.get('/url/:id',UrlController.apiGetUrlById);
router.delete('/url/:id',UrlController.apiDeleteUrlById);

module.exports = router;    