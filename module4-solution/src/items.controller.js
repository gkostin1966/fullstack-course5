(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams','MenuDataService'];
function ItemsController($stateParams, MenuDataService) {
  var ctrl = this;
  MenuDataService.getCategoryItems($stateParams.id)
  .then(function(response) {
    ctrl.items = response;
  });
}

})();

