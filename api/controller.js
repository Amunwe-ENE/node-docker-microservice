'use strict';


var specificService = require('../service/specificService');

var controllers = {
  
   getService1: function(req, res) {
    specificService.findService(req, res, function(err, data) {
               if (err)
                   res.send(err);
               res.json(data);
           });
       },
       
    getService2: function(req, res) {
    specificService.findService(req, res, function(err, data) {
                if (err)
                    res.send(err);
                res.json(data);
            });
        },
};

module.exports = controllers;