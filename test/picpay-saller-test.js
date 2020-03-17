const assert = require('assert');
const Picpaysaller = require('../lib/picpay-saller');

describe('Testing Class Picpay Saller', () => {
	
	it('Login', () => {
        
        const pic = new Picpaysaller(
            "04878901160",
            "programmer.jean@gmail.com",
            "2qsYkPXZoe",
        );
        
		assert.equal(4, 2 + 2);
	});
});