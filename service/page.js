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
        if(!docs.length<1){
        let newDocs = [];
        for(let i in docs) {
          newDocs.push(
            {
              page:{
                _id: i._id,
                title: i.title,
                url: i.url
              },
              permission: i.users[0].permission
            }
          );
        };
        res.json(newDocs)
      }else{
        res.json(docs)
      }
    });
  },

  setMarkdown: (req, res)=>{

    const {markdown, page_id} = req.body;
    const {account_id} = req.user.user;
    // check if markdown is underfined

    pageMd.findById(page_id).exec((err, doc)=>{

      if (err) throw err;
      for(let i of doc.users){
        if(i.account_id = account_id && i.permission == 'VV' ) 
          return res.sendStatus(403);
      }
      pageMd.updateOne({markdown:markdown},(err, res)=> {
        if (err) return res.status(500).json(err);

        res.json('Markdown Saved succefully')
      });

    });
    
  },
  v1: (req, res)=>{
    res.json(require('./v1'));
  }
 

};

module.exports = page;