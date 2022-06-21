const { json } = require('express/lib/response');
const UrlService = require('../services/UrlService');

class Url{

    //apiGetAllUrls function
    static async apiGetAllUrls(req,res,next){
        try{
            const response = await UrlService.getAllUrls();
            return res.json({
                success : response.success,
                data    : response.data
            });
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }

    //apiCreateNewShortUrl function
    static async apiCreateNewShortUrl(req,res,next){
        try{
            const newShortenUrl =  await UrlService.createNewShortenUrl(req);
            
            return res.json({
                success:newShortenUrl.success,
                data:req.body.url,
                message:newShortenUrl.data
            });
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }

    // apiGetUrlById function
    static async apiGetUrlById(req,res,next){
        try{
            let id = req.params.id;
            const response =  await UrlService.getUrlById(id);
            
            return res.json({
                success:response.success,
                data:response.data,
                message:response.message
            });
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }

    //apiDeleteUrlById
    static async apiDeleteUrlById(req,res,next){
        try{
            let id = req.params.id;
            const response =  await UrlService.deleteUrlById(id);
            
            return res.json({
                success:response.success,
                data:[],
                message:response.message
            });
        }
        catch(error){
            res.status(500).json({error:error})
        }
    }

    //apiGetUrlByCode function
    static async apiGetUrlByCode(req, res, next) {
        let response = {};
        let code = req.params.code;
        try {
            response = await UrlService.getUrlByCode(code);

            return res.json({
                success:response.success,
                data:response.data,
                message:response.message
            });  
        }
        catch (err) {
            res.status(500).json({error: error})
        }
    }
}

module.exports = Url