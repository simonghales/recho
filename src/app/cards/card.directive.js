(function () {
  'use strict';

  angular
    .module('recho.cards.directives')
    .directive('card', card);

  function card() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/cards/_card.html',
      replace: true,
      scope: false,
      //link: link,
      //controller: 'FooterController',
      //controllerAs: 'footerVM'
    }

    return directive;

    //function link(scope, element, attrs) {
    //
    //}

  }

})();
