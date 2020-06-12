'use strict';

const controller = require('./controller');
const authenticateToken = require('../service/validateToken')
module.exports = function(app, base) {

  app.use('/v1', authenticateToken);

  app.route(base).get(controller.home).post(controller.home);
  app.route(base+'/docs/add').get(controller.add);
  app.route(base+'/docs/html').get(controller.html);
  app.route(base+'/docs/markdown').get(controller.markdown);
  app.route(base+'/docs/all_pages').get(controller.all_pages);


    // for this end point we will only be accepting a post request
   app.route(base+'/v1/add_page').get(controller.addPage)
       .post(controller.addPage);

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