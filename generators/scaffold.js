'use strict';

var _ = require('lodash');
_.str = require('underscore.string');
_.str.inflection = require('inflection');

module.exports = function(name) {
  var modelGenerator = require('./model');
  var controllerGenerator = require('./controller');

  var underscored = _.str.underscored(name);
  var singular = _.str.inflection.singularize(underscored);
  var camelized = _.str.camelize(singular);
  var controllerName = _.str.inflection.pluralize(camelized);

  modelGenerator(singular);
  controllerGenerator(controllerName);

  console.log(`Scaffolding generated.`);
};