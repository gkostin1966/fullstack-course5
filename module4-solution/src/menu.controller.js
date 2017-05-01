(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuController', MenuController);


MenuController.$inject = ['MenuDataService', 'items'];
function MenuController(MenuDataService, items) {
  var menu = this;
  menu.items = items;
}

})();
