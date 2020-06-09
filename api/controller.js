'use strict';
const PageModel = require('../models/addPageModel');    //  Importing the Add-Page Model.

var page = require('../service/page');

var controllers = {
  
   // addPage: function(req, res) {
   //  // put the logic to  save the file to to database or file system here
   //  res.end('Page saved succesfully')
   //     },



/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////
    //  Add a Single Page and save to the MongoDB
    addPage: (req, res, next) => {
        const bodyParams = req.body;

        //  Create an instance of the PageModel.
        const page = new PageModel({
            title: bodyParams.title,
            content: bodyParams.content,
        });

        //  Check if the Page Title is already existing.
        PageModel.findOne({ title: page.title })
            .then((existingPageTitle) => {
                if (existingPageTitle) {
                    //  If "True", that means the Page Title already existed then return a response message.
                    res.status(200).json({
                        Message: "Page Title already exist, please user another Title.",
                    });
                }
                else {
                    //  If it doesn't exist, then save to the DB.
                    page.save()
                        .then((result) => {
                            return res.status(201).json({
                                Message: "Page added Successfully...",
                                Page: {
                                    _id: result._id,
                                    Title: result.title,
                                    Content: result.content,
                                },
                            });
                        })
                        .catch((error) => {
                            return res.status(500).json({
                                Error: error,     //  If there is error, return the Error message.
                            });
                        });
                }
            })
            .catch((error) => {
                return res.status(404).json({
                    Message: error,     //  If there is error, return the Error message.
                });
            });
    },
/////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


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