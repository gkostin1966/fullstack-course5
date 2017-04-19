(function() {
  'use strict';
  angular.module('myFirstApp', [])
    .controller('MyFirstController', MyFirstController);

  function MyFirstController($scope) {
    $scope.name = "Greg"
    $scope.total = calculateNumericForString($scope.name);

    $scope.displayNumeric = function() {
      $scope.total = calculateNumericForString($scope.name);
    };

    function calculateNumericForString(string) {
      var totalStringValue = 0;
      for (var i = 0; i < string.length; i++) {
        totalStringValue += string.charCodeAt(i);
      }
      return totalStringValue;
    }
  }
})();
