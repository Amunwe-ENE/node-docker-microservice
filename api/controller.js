'use strict';

const page = require('../service/page');
const docs = require('../service/docs');
const {signToken} = require('../service/handleTokens')
var controllers = {
    ...docs,
    ...page,
    signToken
//    addPage: (req, res) => {
//     // put the logic to  save the file to to database or file system here
//     res.end('Page saved succesfully')
//        },
       
//     getHtml: (req, res)=> {
//         // call method getHtml that returns the html and send it to the client
//     page.getHtml(req, res, (err, data) => {
//                 if (err)
//                     res.send(err);
//                 res.json(data);
//             });
//         },
        
//     setMarkdown: (req, res)  =>{
//         page.setMardown(req, res, (err, data) => {
//                     if (err)
//                         res.send(err);
//                     res.json(data);
//                 });
//             },
//     listPages: (req, res) => {
//         page.listPages(req, res, (err, data) => {
//                     if (err)
//                         res.send(err);
//                     res.json(data);
//                 });
//             },
};

module.exports = controllers;