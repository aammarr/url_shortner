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
                status:newShortenUrl.status,
                data:req.body.url,
                message:newShortenUrl.data
            });
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }
}

module.exports = Url