const fs = require('fs') // to write and read user's files 
const showdown = require('showdown'); // to covert a markdown file to html is requested
const converter = new showdown.Converter();// the converter has a method makeHtml that we will use
const htmlize = require('./htmlize')
const docs = {
    home: (req,res)=>{

        fs.readFile(global.appRoot+'/api/v1/docs/README.md', 'utf-8', (err, data) => {
          if (err) throw err;
          res.send(htmlize(converter.makeHtml(data)));
        });
      },
    add: (req, res) =>{
        fs.readFile(global.appRoot+'/api/v1/docs/add/post.md', 'utf-8', (err, data) => {
            if (err) throw err;
            res.send(htmlize(converter.makeHtml(data)));
          });
    },
    markdown: (req, res) =>{
        fs.readFile(global.appRoot+'/api/v1/docs/markdown/put.md', 'utf-8', (err, data) => {
            if (err) throw err;
            res.send(htmlize(converter.makeHtml(data)));
          });
    },
    html: (req, res) =>{
        fs.readFile(global.appRoot+'/api/v1/docs/html/get.md', 'utf-8', (err, data) => {
            if (err) throw err;
            res.send(htmlize(converter.makeHtml(data)));
          });
    },
    all_pages: (req, res) =>{
        fs.readFile(global.appRoot+'/api/v1/docs/list_pages/get.md', 'utf-8', (err, data) => {
            if (err) return res.sendStatus(500) ;
            res.send(htmlize(converter.makeHtml(data)));
          });
    },
    v1: (req, res) =>{
      fs.readFile(global.appRoot+'/api/v1/docs/v1/get.md', 'utf-8', (err, data) => {
          if (err) throw err;
          res.send(htmlize(converter.makeHtml(data)));
        });
  },
  get_token: (req, res) =>{
    fs.readFile(global.appRoot+'/api/v1/docs/get_token/get.md', 'utf-8', (err, data) => {
        if (err) throw err;
        res.send(htmlize(converter.makeHtml(data)));
      });
},
}

module.exports = docs;