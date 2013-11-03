
var template = require('./template');
var keys = require('keys');

module.exports = {
  init: function (scope, element, attrs) {
    element.find('input').bind('blur', function () {
      var res = keys.normalize(this.value);
      if (res.value) {
        this.value = res.value;
      }
    });
  },
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
      if (res.value) return value;
    }
  },
  normalize: function (value) {
    return keys.normalize(value).value;
  },
  template: template,
};
