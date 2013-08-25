var crypto = require('crypto');
var querystring = require('querystring');

var gravatarImage = function() {
    this.baseUrl   = 'http://www.gravatar.com/avatar/';
}

gravatarImage.prototype.imageUrl = function(email, parameters) {
    var result = "";
    var convertedQueryString = querystring.stringify(parameters);

    if (convertedQueryString !== ""){
        result = "?" + convertedQueryString;
    }

    return this.baseUrl + crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex') + result;
}


module.exports = new gravatarImage();