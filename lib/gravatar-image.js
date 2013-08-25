var crypto = require('crypto')

var gravatarImage = function() {
    this.baseUrl   = 'http://www.gravatar.com/avatar/';
}

gravatarImage.prototype = {
    url: function(email) {
        var result = baseURL + crypto.createHash('md5').update(email.toLowerCase().trim()).digest('hex');
    }
}


module.exports = gravatarImage();