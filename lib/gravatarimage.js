var crypto = require('crypto');
var querystring = require('querystring');

var gravatar = module.exports = {
    imageUrl: function(email, parameters) {
        var baseUrl = 'http://www.gravatar.com/avatar/';
        var result = "";
        var convertedQueryString = querystring.stringify(parameters);

        if (convertedQueryString !== ""){
            result = "?" + convertedQueryString;
        }

        return baseUrl + crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex') + result;
    }
}


module.exports = gravatar;