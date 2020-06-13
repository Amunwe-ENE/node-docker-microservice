//if we need to make third party requests
const request = require('request');

// we will need to require mongoose schemas here
const pageMd = require('../models/pageModel')

// page object that we will export containing the methods needed by the controller
const page = {

    
   savePage: (req, res) => {

    //destruct request params
    const {title, url , markdown} = req.body;
    const {user} = req.user;
    console.log(user);
    if (!title || !url) return res.sendStatus(401);
    const  new_page = pageMd({
              title,
              users: [{
                account_id:user.account_id}
              ],
              url,
              markdown
            });
    pageMd.findOne({url}).exec((err, doc)=>{
      if (err){
        return res.sendStatus(401)
      } 

      //dont save if doc is not empty, return the appropriate response
      if(doc) return res.sendStatus(401);
      //  SAVE if  doc = {}
      if(doc === null ){
      new_page.save();
      return res.send("saved")
      }
     
      
    })

   },

   // return the html version of the requested file
   getHtml: (req, res, next) => {
    const {page_id} = req.params;
    pageMd.findById(page_id).exec((err, doc)=>{

      if (err) throw err;
      if(doc === null) return res.sendStatus(404)
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