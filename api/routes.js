'use strict';

const controller = require('./controller');

module.exports = function(app, base) {

  app.route(base).get(controller.home).post(controller.home);

    // for this end point we will only be accepting a post request
   app.route(base+'/add_page').get(controller.addPage)
       .post(controller.addPage);

     // only get request with id accepted  
   app.route(base+'/retrieve_page_html')
       .get(controller.getHtml);

    // only post request with page id accepted
    app.route(base+'/set_page_markdown')
    .put(controller.setMarkdown);

    // get and post request is accepted as well
    app.route(base+'/list_pages')
    .get(controller.listPages);
};