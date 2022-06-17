const res = require('express/lib/response');
const UrlModel = require('../models/Url.model');

class UrlService{
    

    //create new shorten Url function
    static async createNewShortenUrl(data){
        try{
            let isValid = this.isValidHttpUrl(data.body.url);
            let response={}

            if( isValid == false){
                response.data = "InValid URL";
                response.status = 500;
                return response;
            }else{
                let shortCode = this.shortCode()
                const newUrlShorten = {
                    url: data.body.url,
                    shorten_url: '',  //'https://www.'+process.env.BASE_URL+shortCode,
                    code: shortCode,
                    user:'Test User',
                }

                
                response.data = await new UrlModel(newUrlShorten).save();
                response.success = true;
                return response;
            }

        }
        catch(error){
            console.log(`Unable to shorten Url, ${error}`);
        }
    }

    // getAllUrls functions
    static async getAllUrls(){
        try{
            const response = {};
            const data = await UrlModel.find();

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
            console.log(`Unable to get all Urls, ${error}`);
        }
    }
    
    //
    static async getUrlById(id){
        try{
            let response = {}
            const url = await UrlModel.findById(id);

            if(url){
                url.shorten_url="https://www."+process.env.BASE_URL+url.code;
                response.data = url;
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
            console.log(`Unable to get Url by Id, ${error}`);
        }
    }

    // isValidHttpUrl function
    static isValidHttpUrl(string){
        let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    }

    // Short Code Function
    static shortCode(){
        return Math.random().toString(36).slice(2, 7);
    }

    // Delete Url By Id Function
    static async deleteUrlById(id){
        try{ 
            let response={};
            const url = await UrlModel.findByIdAndDelete(id);
            if(url){
                response.data = [];
                response.success = true;
                response.message = 'Url deleted succesfuly';
            }else{
                response.data = [];
                response.success = true;
                response.message = 'Not found';
            }
            return response
        }
        catch(error){
            console.log(`Unable to delete Url by Id, ${error}`);
        }
    }
}

module.exports = UrlService;