const express = require('express');
const router = express.Router();
const NftController = require('../controllers/nft.controller');


router.get('/nfts',NftController.apiGetAllNfts);
router.post('/nft',NftController.apiCreateNewNft);
router.get('/nft/:id',NftController.apiGetNftById);
router.delete('/nft/:id',NftController.apiDeleteNftById);

module.exports = router;    