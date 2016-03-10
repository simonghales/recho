(function () {
  'use strict';

  angular
    .module('recho.cards.directives')
    .directive('cardContentImage', cardContentImage);

  function cardContentImage() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/cards/_card.content.image.html',
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
