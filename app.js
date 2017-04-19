(function() {
  'use strict';
  angular.module('myFirstApp', [])
    .controller('MyFirstController', MyFirstController);

  MyFirstController.$inject = ['$scope', '$filter', '$injector'];

  function MyFirstController($scope, $filter, $injector) {
    $scope.name = "Greg";
    $scope.total = calculateNumericForString($scope.name);

    $scope.upper = function() {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
      $scope.displayNumeric();
    };

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

    console.log($injector.annotate(MyFirstController));
  }
})();
