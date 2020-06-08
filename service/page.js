//if we need to make third party requests
var request = require('request');


var pages = {
   findPage: function(req, res, next) {
       res.send('Take your page');
        next("Take your page");
   },
   getHtml: function(req, res, next) {
    res.send('Take your html page');

}
};

module.exports = page;