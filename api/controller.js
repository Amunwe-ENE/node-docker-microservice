'use strict';
const fs = require('fs') // to write and read user's files 
const showdown = require('showdown'); // to covert a markdown file to html is requested
const converter = new showdown.Converter();// the converter has a method makeHtml that we will use


var page = require('../service/page');

var controllers = {
    home: (req,res)=>{

        fs.readFile(global.appRoot+'/README.md', 'utf-8', (err, data) => {
          if (err) throw err;
          res.send(converter.makeHtml(data));
        });
      },
   addPage: (req, res) => {
    // put the logic to  save the file to to database or file system here
    res.end('Page saved succesfully')
       },
       
    getHtml: (req, res)=> {
        // call method getHtml that returns the html and send it to the client
    page.getHtml(req, res, (err, data) => {
                if (err)
                    res.send(err);
                res.json(data);
            });
        },
        
    setMarkdown: (req, res)  =>{
        page.setMardown(req, res, (err, data) => {
                    if (err)
                        res.send(err);
                    res.json(data);
                });
            },
    listPages: (req, res) => {
        page.listPages(req, res, (err, data) => {
                    if (err)
                        res.send(err);
                    res.json(data);
                });
            },
};

module.exports = controllers;