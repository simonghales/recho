(function() {
  'use strict';

  angular
    .module('recho', [

      'recho.general',
      'recho.post',
      'recho.cards',
      'recho.comments',
      'recho.data',

      'ngAnimate',
      'ngCookies',
      'ngSanitize',
      'restangular',
      'ui.router',
      'toastr'
    ]);

  angular.module('recho.general', [
    'recho.general.controllers',
    'recho.general.filters',
    'recho.general.directives'
  ]);

  angular.module('recho.general.controllers', []);

  angular.module('recho.general.filters', []);

  angular.module('recho.general.directives', []);

  angular.module('recho.post', [
    'recho.post.controllers',
    'recho.post.directives'
  ]);

  angular.module('recho.post.controllers', []);

  angular.module('recho.post.directives', []);

  angular.module('recho.cards', [
    'recho.cards.controllers',
    'recho.cards.directives'
  ]);

  angular.module('recho.cards.controllers', []);

  angular.module('recho.cards.directives', []);

  angular.module('recho.comments', [
    'recho.comments.controllers',
    'recho.comments.directives'
  ]);

  angular.module('recho.comments.controllers', []);

  angular.module('recho.comments.directives', []);

  angular.module('recho.data', [
    'recho.data.constants'
  ]);

  angular.module('recho.data.constants', []);

})();
