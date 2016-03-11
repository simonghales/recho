(function () {
  'use strict';

  angular
    .module('recho.cards.directives')
    .directive('cardContentLink', cardContentLink);

  function cardContentLink() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/cards/_card.content.link.html',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
