(function () {
  'use strict';

  angular
    .module('recho.cards.directives')
    .directive('cardContentSoundcloud', cardContentSoundcloud);

  function cardContentSoundcloud() {

    var directive = {
      restrict: 'E',
      templateUrl: 'app/cards/_card.content.soundcloud.html',
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
