const axios = require('axios');
const NodeCache = require('node-cache');

class Api {
    constructor() {

        this.cache = new NodeCache( { stdTTL: 100, checkperiod: 120 });
        this.instance = axios.create({
            baseURL: this.getUrlApi()
        });
    }

    getUrlApi(){
        return 'https://sellerpanel-api.picpay.com/sellerpanel'
    }

    async post(url, body){

        try{        
            return  await this.instance.post(url, body);
        }catch(err){

            console.error(err);
        }
    }

    async get(url, params){
        try{
            return await this.instance.get(url, params);

        }catch(err){
            console.error(err);

        }
    }
}

module.exports = Api;