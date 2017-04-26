(function() {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var buy = this;

    buy.items = ShoppingListCheckOffService.getBuyItems();
    buy.item = function(index) {
      ShoppingListCheckOffService.buyItem(index);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var buyItems = [
      {name: "cookie", quantity: 10},
      {name: "milk", quantity: 1},
      {name: "ice cream", quantity: 2},
      {name: "egg", quantity: 12},
      {name: "butter", quantity: 4} ];
    var boughtItems = [];

    service.buyItem = function(index) {
      boughtItems.push(buyItems[index])
      buyItems.splice(index, 1)
    };

    service.getBuyItems = function() {
      return buyItems;
    };

    service.getBoughtItems = function() {
      return boughtItems;
    };
  }

})();
