(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  // List of shopping items
  var categories = [];

  // Pre-populate a no cookie list
  categories.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  categories.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  categories.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(categories);
    }, 800);

    return deferred.promise;
  };

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItemsForCategory = function (categoryShortName) {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve([categories[categoryShortName]]);
    }, 800);

    return deferred.promise;
  };
}

})();
