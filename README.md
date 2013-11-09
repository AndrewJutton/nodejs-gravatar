nodejs-gravatar
===============

Node module to consume images and profiles from gravatar.

nodejs-gravatar makes it easy to build gravatar image url's to access a user's gravatar directly.


To Install
----------

Using node package manager

###Example
    npm install nodejs-gravatar


To Use
------

Simply add the following require statement to import the module and then call the imageUrl method, passing the email address of the user to generate a gravatar URL.

### Example
    var gravatar = require('nodejs-gravatar');
    newUser.avatar = gravatar.imageUrl('test@gmail.com);


You can also specify the size of the image with the following

###Example
    newUser.avatar = gravatar.imageUrl('test@gmail.com, { "size": "200" });

A valid size is between 1 - 2048.

