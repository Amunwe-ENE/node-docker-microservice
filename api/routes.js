'use strict';

const controller = require('./controller');
const authenticateToken = require('../service/validateToken')
module.exports = function(app, base) {

  app.use('/v1', authenticateToken);

  app.route('/docs').get(controller.home).post(controller.home);
  app.route('/docs/add').get(controller.add);
  app.route('/docs/html').get(controller.html);
  app.route('/docs/markdown').get(controller.markdown);
  app.route('/docs/all_pages').get(controller.all_pages);


    // for this end point we will only be accepting a post request
   app.route(base+'/v1/add_page')
       .post(controller.savePage);

     // only get request with id accepted  
   app.route(base+'/v1/retrieve_page_html')
       .get(controller.getHtml);

    // only post request with page id accepted
    app.route(base+'/v1/set_page_markdown')
    .put(controller.setMarkdown);

    // get and post request is accepted as well
    app.route(base+'/v1/list_pages')
    .get(controller.listPages);
};