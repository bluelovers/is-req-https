/**
 * Created by Idan Dagan on 24/12/2017.
*/

function hasOwnProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports.isHttps = isHttps;

function isHttps(req) {

    // For node requests without any framework
    if (hasOwnProp(req, 'connection')) {
        if (hasOwnProp(req.connection, 'encrypted')) {
            return true;
        }
    }

    // For express requests
    if (hasOwnProp(req, 'secure')) {
        return req.secure;
    }

    // Test the headers
    if (hasOwnProp(req, 'headers')) {
        if (hasOwnProp(req.headers, 'x-forwarded-proto')) {
            return req.headers['x-forwarded-proto'] === 'https';
        }
    }

    // For Hapi requests check req.server.info.protocol
    if (hasOwnProp(req, 'server')) {
        if (hasOwnProp(req.server, 'info')) {
            return req.server.info.protocol === 'https';
        }
    }

    return false;
}
