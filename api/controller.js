'use strict';


var page = require('../service/page');

var controllers = {
  
   addPage: function(req, res) {
    // put the logic to  save the file to to database or file system here
    res.end('Page saved succesfully')
       },
       
    getHtml: function(req, res) {
        // call method getHtml that returns the html and send it to the client
    page.getHtml(req, res, function(err, data) {
                if (err)
                    res.send(err);
                res.json(data);
            });
        },
        
    setMarkdown: function(req, res) {
        page.setMardown(req, res, function(err, data) {
                    if (err)
                        res.send(err);
                    res.json(data);
                });
            },
    listPages: function(req, res) {
        page.listPages(req, res, function(err, data) {
                    if (err)
                        res.send(err);
                    res.json(data);
                });
            },
};

module.exports = controllers;