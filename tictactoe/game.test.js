var expect = chai.expect

describe('GameCtrl', function() {

  beforeEach(module('app')); 

  var $controller;

  beforeEach(inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  describe('$scope.matrix', function() {
    it('should be the length of the size variable', function() {
      var $test = {};
      debugger;
      var controller = $controller('GameCtrl', {$scope: $test});
      console.log($scope.matrix);
      expect($scope.matrix.length).to.equal(3);

    });
  })


})