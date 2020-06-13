//if we need to make third party requests
const request = require('request');

// we will need to require mongoose schemas here
const pageMd = require('../models/pageModel')

// page object that we will export containing the methods needed by the controller
const page = {

    //this method recieve the request to save a file
   savePage: (req, res, next) => {

    //destruct request params
    const {page_name, page_url , page_owner, markdown} = req.body;

    const  new_page = pageMd({
              page_name,
              page_owner,
              page_url,
              markdown
            });
    pageMd.findOne({page_url, page_owner}).exec((err, doc)=>{
      if (err) throw err;

      new_page.save();
      next("Your page was saved");
    })

   },

   // return the html version of the requested file
   getHtml: (req, res, next) => {

    pageMd.findById(req.page_id).exec((err, doc)=>{

      if (err) throw err;

        request({
          uri: doc.url,
        }, (error, response, body) => {
          next(body);
        });
      });
    },

  listPages: (req, res, next) =>{

    // here we simply return the _id , page_name, of all the user's available pages in our database
    pageMd.find((err, docs)=>{

        if(err) throw err;

        next(docs)
    });
  },

  setMarkdown: (req, res, next)=>{

    const {markdown, page_id} = req.body;

    pageMd.findById(page_id).exec((err, doc)=>{

      if (err) throw err;

      pageMd.updateOne({markdown},(err, res)=> {
        if (err) throw err;

        next('Markdown Saved succefully')
      });

    });
    
  },
 

};

module.exports = page;