const Api = require('./api');

class PicpaySaller {
    constructor(cnpj, email, password) {

        this.cnpj = cnpj;
        this.email = email;
        this.password = password;

        this.instance = new Api();
        this.login(cnpj, email, password);
    }

    async login(cnpj, email, password) {

        const {status, data} = await this.instance.post('/user/login', {
            cnpj,
            email,
            password
        });

        if(status === 200){
            const { token_transaction, token_transaction_expires_in } = data;
            this.instance.cache.set('token', {
                token_transaction,
                token_transaction_expires_in
            }, 1200);
        }
    
        return {status, data};
    }
}

module.exports = PicpaySaller;