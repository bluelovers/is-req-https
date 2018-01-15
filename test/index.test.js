/* global before, beforeEach, after, afterEach, it, describe */
const assert = require('assert');
const isHttps = require('../lib');


describe('is-req-https', () => {

    const httpsReq = {
        secure: true
    }

    const httpReq = {
        server: {
            info: {
                protocol: 'http'
            }
        }
    }

    it('should return true', () => {
        assert.equal(isHttps(httpsReq), true);
    });

    it('should return true', () => {
        assert.equal(isHttps(httpReq), false);
    });

});
