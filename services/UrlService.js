const res = require('express/lib/response');
const UrlModel = require('../models/Url.model');

class UrlService{
    

    //create new shorten Url function
    static async createNewShortenUrl(data){
        try{
            let isValid = this.isValidHttpUrl(data.body.url);
            let response={}
            console.log(isValid);
            if( isValid == false){
                response.data = "InValid URL";
                response.status = 500;
                return response;
            }else{
                let shortCode = this.shortCode()
                const newUrlShorten = {
                    url: data.body.url,
                    shorten_url: 'https://www.'+process.env.BASE_URL+shortCode,
                    code: shortCode,
                    user:'Test User',
                }

                
                response.data = await new UrlModel(newUrlShorten).save();
                response.status = 200;
                return response;
            }

        }
        catch(error){
            console.log(`Unable to shorten Url, ${error}`);
        }
    }

    //
    static async getAllUrls(){
        try{
            const response = {};
            
            const data = await UrlModel.find();

            if(data.length>0){
                response.data = data;
                response.success = true;
            }
            else{
                response.data = [];
                response.success = true;
            }
            return response
        }
        catch(error){
            console.log(`Unable to get all Urls, ${error}`);
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
}

module.exports = UrlService;