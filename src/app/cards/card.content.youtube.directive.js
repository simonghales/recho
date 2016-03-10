(function () {
  'use strict';

  angular
    .module('recho.cards.directives')
    .directive('cardContentYoutube', cardContentYoutube);

  function cardContentYoutube() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/cards/_card.content.youtube.html',
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
