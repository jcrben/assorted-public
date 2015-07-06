angular.module('app')
       .directive('mySelfClosingAlert', mySelfClosingAlert);

// note this not being used in production
function mySelfClosingAlert () {
  return {
    restrict: 'E',
    scope: {
      alertMsg: '='
    },
    template: '<div>{{msg}}</div>'
  }
}