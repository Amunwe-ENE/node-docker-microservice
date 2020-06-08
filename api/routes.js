'use strict';

const controller = require('./controller');

module.exports = function(app) {
   app.route('/service_1')
       .get(controller.getService1);
   app.route('/services/:id')
       .get(controller.getService2);
};