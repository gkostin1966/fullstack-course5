(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);

ItemsController.$inject = ['$stateParams','MenuDataService'];
function ItemsController($stateParams, MenuDataService) {
  var ctrl = this;
  MenuDataService.getItemsForCategory($stateParams.id)
  .then(function(response) {
    ctrl.items = response;
  });
}

})();

