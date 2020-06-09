//if we need to make third party requests
var request = require('request');
// we will need to require mongoose schemas here

var fs = require('fs') // to write and read user's files 
var showdown = require('showdown'); // to covert a markdown file to html is requested
var converter = new showdown.Converter();// the converter has a method makeHtml that we will use

// page object that we will export containing the methods needed by the controller
var page = {
  //this method recieve the request to save a file
   savePage: function(req, res, next) {
       //res.send('Your page was saved by me first');
        next("Your page was saved");
   },

   // return the html version of the requested file
   getHtml: function(req, res, next) {
     // here we first confirm if the user has the requested file
     // and send it 
    fs.readFile(global.appRoot+'/markdown/hello-world.md', 'utf-8', function(err, data) {
        if (err) throw err;
        next(converter.makeHtml(data));
      });
},
  listPages: function(req, res, next){
    // here we simply return the _id , page_name, of all the user's available pages in our database
  },
  setMardown: function(req, res, next){
    //we check if the page id exist 
    // then if it exists we save the page's mark

    //if the markdown we recieve is a .md file then it means we have to replace the old markdown file

    // if we are recieving the markdown in a json string format then it means that we will storing markdowns as string in the DB
  }

};

module.exports = page;