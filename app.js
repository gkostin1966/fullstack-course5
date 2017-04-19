(function() {
  'use strict';
  angular.module('myFirstApp', [])
    .controller('MyFirstController', function($scope) {
      $scope.name = "Greg"
      $scope.sayHello = function() {
        return "Hello Coursera!";
      };
    });
})();
