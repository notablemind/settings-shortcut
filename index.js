
var template = require('./template');
var keys = require('keys');

module.exports = {
  validator: function (scope, ctrl) {
    return function (value) {
      if (keys.validate(value)) {
        ctrl.$setValidity('shortcut', true);
        return value;
      } else {
        ctrl.$setValidity('shortcut', false);
      }
    }
  },
  template: template,
};
