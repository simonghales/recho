(function () {
  'use strict';

  angular
    .module('recho.cards.directives')
    .directive('cardPlaceholder', cardPlaceholder);

  function cardPlaceholder() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/cards/_card.placeholder.html',
      replace: true,
      scope: false
    }

    return directive;

  }

})();
