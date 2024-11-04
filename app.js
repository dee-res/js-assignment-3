(function (){
  'use strict';

angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

  function FoundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<'
      },
      controller: FoundItemsDirectiveController,
      controllerAs: 'found',
      bindToController: true
    };
    
      return ddo;
  }

  function FoundItemsDirectiveController() {
    var found = this;

  

  NarrowItDownController.$inject = ['MenuSearchService'];
  
