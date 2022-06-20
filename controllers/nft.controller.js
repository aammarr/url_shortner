const { json } = require('express/lib/response');
const NftService = require('../services/NftService');

class Nft{

    //apiGetAllNfts function
    static async apiGetAllNfts(req,res,next){
        try{
            const response = await NftService.getAllNfts();
            return res.json({
                success : response.success,
                data    : response.data
            });
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }

    //apiCreateNewNft function
    static async apiCreateNewNft(req,res,next){
        try{
            const newNft =  await NftService.createNewNft(req);
            
            return res.json({
                success:newNft.success,
                data:req.body.url,
                message:newNft.data
            });
        }
        catch(error){
            res.status(500).json({error: error})
        }
    }

    // apiGetNftById function
    static async apiGetNftById(req,res,next){
        try{
            let id = req.params.id;
            let response =  await NftService.getNftById(id);
            
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

    //apiDeleteNftById
    static async apiDeleteNftById(req,res,next){
        try{
            let id = req.params.id;
            const response =  await NftService.deleteNftById(id);
            
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
}

module.exports = Nft