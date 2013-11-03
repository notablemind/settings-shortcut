
var template = require('./template');
var keys = require('keys');

module.exports = {
  validator: function (scope, ctrl) {
    return function (value) {
      var res = keys.normalize(value);
      if (res.error) {
        ctrl.$setValidity('shortcut', false);
        scope.error = res.error;
      } else {
        ctrl.$setValidity('shortcut', true);
      }
      if (res.value) {
        return value;
      }
    }
  },
  template: template,
};
