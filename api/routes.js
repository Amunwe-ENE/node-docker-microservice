'use strict';

const controller = require('./controller');

module.exports = function(app, baseURL) {
   app.route(baseURL+'/add_page')
       .post(controller.addPage);

   app.route(baseURL+'/retrieve_page_html')
       .get(controller.getHtml);

    app.route(baseURL+'/set_page_markdown')
    .post(controller.setMarkdown);

    app.route(baseURL+'/list_pages')
    .get(controller.listPages);
};