should = require('should');
gravatar = require('../lib/gravatarImage');

describe("gravatar image tests", function() {

    it("should return baseurl with encoded email address appended", function() {
        gravatar.imageUrl('test@gmail.com').should.be.equal('http://www.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058');
    });

    it("should return baseurl with encoded email address appended and size querystring", function() {
        gravatar.imageUrl('test@gmail.com', { "size": 200 }).should.be.equal('http://www.gravatar.com/avatar/1aedb8d9dc4751e229a335e371db8058?size=200');
    });
});