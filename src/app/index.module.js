(function() {
  'use strict';

  angular
    .module('recho', [

      'recho.cards',

      'ngAnimate',
      'ngCookies',
      'ngSanitize',
      'restangular',
      'ui.router',
      'toastr'
    ]);

  angular.module('recho.cards', [
    'recho.cards.controllers',
    'recho.cards.directives'
  ]);

  angular.module('recho.cards.controllers', []);

  angular.module('recho.cards.directives', []);

})();
