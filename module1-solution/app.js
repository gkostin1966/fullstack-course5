(function() {
  'use strict';
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.csv = "";
    $scope.message = "";

    $scope.CheckIfTooMuch = function() {
      var msg = "";
      switch (numberOfTokens($scope.csv)) {
        case 0:
          msg = "Please enter data first";
          break;
        case 1:
        case 2:
        case 3:
          msg = "Enjoy!";
          break;
        default:
          msg = "Too much!";
          break;
      }
      $scope.message = msg;
    }

    function numberOfTokens(csv) {
      var tokenArray = csv.split(',');
      var tokenCount = tokenArray.length;
      if (tokenCount == 1) {
        tokenCount = (tokenArray[0].length > 0) ? 1 : 0;
      }
      return tokenCount;
    }
  }
})();
