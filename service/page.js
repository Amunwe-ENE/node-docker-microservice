//if we need to make third party requests
const request = require('request');

// we will need to require mongoose schemas here
const pageMd = require('../models/pageModel')

// page object that we will export containing the methods needed by the controller
const page = {

    
   savePage: (req, res, next) => {

    //destruct request params
    const {page_title, page_url , page_owner, user, markdown} = req.body;

    const  new_page = pageMd({
              page_title,
              users: [{
                user_id:user.id}
              ],
              page_url,
              markdown
            });
    pageMd.findOne({page_url, user_id:  user.id}).exec((err, doc)=>{
      if (err) throw err;

      //  SAVE if  doc = {}
      new_page.save();

      //dont save if doc is not empty, return the appropriate response
      next("Your page was saved");
    })

   },

   // return the html version of the requested file
   getHtml: (req, res, next) => {

    pageMd.findById(req.page_id).exec((err, doc)=>{

      if (err) throw err;

      //chech if the document/page was found be fore making the request
        request({
          uri: doc.url,
        }, (error, response, body) => {
          next(body);
        });
      });
    },

  listPages: (req, res, next) =>{

    
    // change query params to search accordin to user permisions
    pageMd.find((err, docs)=>{

        if(err) throw err;

        next(docs)
    });
  },

  setMarkdown: (req, res, next)=>{

    const {markdown, page_id} = req.body;

    // check if markdown is underfined

    pageMd.findById(page_id).exec((err, doc)=>{

      if (err) throw err;

      pageMd.updateOne({markdown:markdown},(err, res)=> {
        if (err) throw err;

        next('Markdown Saved succefully')
      });

    });
    
  },
 

};

module.exports = page;