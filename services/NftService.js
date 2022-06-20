const res = require('express/lib/response');
const NftModel = require('../models/Nft.model');

class NftService{
    

    //create new Nft function
    static async createNewNft(data){
        try{
            let response={}

            if( isValid == false){
                response.data = "InValid Nft";
                response.status = 500;
                return response;
            }else{
                const newNft = {
                    nft: data.body.nft,
                    nft: shortCode,  
                    code: shortCode,
                    user:'Test User',
                }

                
                response.data = await new NftModel(newNft).save();
                response.success = true;
                return response;
            }

        }
        catch(error){
            console.log(`Unable to Nft, ${error}`);
        }
    }

    // get All Nfts functions
    static async getAllNfts(){
        try{
            const response = {};
            const data = await NftModel.find();

            if(data.length>0){
                for (let i = 0; i < data.length; i++) {
                    data[i].shorten_url = 'https://www.'+process.env.BASE_URL+data[i].code
                    
                }
                response.data = data;
                response.success = true;
            }
            else{
                response.data = [];
                response.success = true;
                response.message = '';
            }
            return response
        }
        catch(error){
            console.log(`Unable to get all Nfts, ${error}`);
        }
    }
    
    //get Nft By Id function
    static async getNftById(id){
        try{
            let response = {}
            const nft = await NftModel.findById(id);

            if(nft){
                nft.shorten_nft="https://www.";
                response.data = nft;
                response.success = true;
                response.message = '';
            }else{
                response.data = [];
                response.success = true;
                response.message = 'Not found';
            }

            return response
        }
        catch(error){
            console.log(`Unable to get Nft by Id, ${error}`);
        }
    }

    // Delete Nft By Id Function
    static async deleteNftById(id){
        try{ 
            let response={};
            const nft = await NftModel.findByIdAndDelete(id);
            if(nft){
                response.data = [];
                response.success = true;
                response.message = 'Nft deleted succesfuly';
            }else{
                response.data = [];
                response.success = true;
                response.message = 'Not found';
            }
            return response
        }
        catch(error){
            console.log(`Unable to delete Nft by Id, ${error}`);
        }
    }
}

module.exports = NftService;