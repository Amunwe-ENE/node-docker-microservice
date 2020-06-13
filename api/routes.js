'use strict';

const controller = require('./controller');
const {verify} = require('../service/handleTokens')
module.exports = function(app, base) {



  app.route('/api/v1/docs').get(controller.home).post(controller.home);
  app.route('/api/v1/docs/add/post.md').get(controller.add);
  app.route('/api/v1/docs/html/get.md').get(controller.html);
  app.route('/api/v1/docs/markdown/put.md').get(controller.markdown);
  app.route('/api/v1/docs/all_pages/get.md').get(controller.all_pages);

  
    // for this end point we will only be accepting a post request
   app.route(base+'/v1/add_page')
       .post(verify,controller.savePage);

     // only get request with id accepted  
   app.route(base+'/v1/retrieve_page_html/:page_id')
       .get(verify, controller.getHtml);

    // only post request with page id accepted
    app.route(base+'/v1/set_page_markdown')
    .put(verify,controller.setMarkdown);

    // get and post request is accepted as well
    app.route(base+'/v1/list_pages')
    .get(verify, controller.listPages);
};