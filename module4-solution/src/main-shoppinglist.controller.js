(function () {
'use strict';

angular.module('MenuApp')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['MenuDataService', 'items'];
function MainShoppingListController(MenuDataService, items) {
  var categories = this;
  categories.items = items;
}

})();
