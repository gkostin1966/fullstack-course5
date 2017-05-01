(function () {
'use strict';

angular.module('MenuApp')
.component('shoppingList', {
  templateUrl: 'src/templates/categorieslist.template.html',
  bindings: {
    items: '<'
  }
});

})();
