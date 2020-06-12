const fs = require('fs') // to write and read user's files 
const showdown = require('showdown'); // to covert a markdown file to html is requested
const converter = new showdown.Converter();// the converter has a method makeHtml that we will use

const docs = {
    home: (req,res)=>{

        fs.readFile(global.appRoot+'/docs/README.md', 'utf-8', (err, data) => {
          if (err) throw err;
          res.send(converter.makeHtml(data));
        });
      },
    add: (req, res) =>{
        fs.readFile(global.appRoot+'/docs/user/post.md', 'utf-8', (err, data) => {
            if (err) throw err;
            res.send(converter.makeHtml(data));
          });
    },
    markdown: (req, res) =>{
        fs.readFile(global.appRoot+'/docs/user/put.md', 'utf-8', (err, data) => {
            if (err) throw err;
            res.send(converter.makeHtml(data));
          });
    },
    html: (req, res) =>{
        fs.readFile(global.appRoot+'/docs/user/get.md', 'utf-8', (err, data) => {
            if (err) throw err;
            res.send(converter.makeHtml(data));
          });
    },
    all_pages: (req, res) =>{
        fs.readFile(global.appRoot+'/docs/other_pages/get.md', 'utf-8', (err, data) => {
            if (err) throw err;
            res.send(converter.makeHtml(data));
          });
    },
}

module.exports = docs;