'use strict';


var page = require('../service/page');

var controllers = {
  
   addPage: function(req, res) {
    page.findPage(req, res, function(err, data) {
               if (err)
                   res.send(err);
               res.json(data);
           });
       },
       
    getHtml: function(req, res) {
    page.getHtml(req, res, function(err, data) {
                if (err)
                    res.send(err);
                res.json(data);
            });
        },
};

module.exports = controllers;