(function() {
  'use strict';

  angular
    .module('recho')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'mainVM'
      })
      .state('post', {
        url: '/post',
        templateUrl: 'app/post/post.html',
        controller: 'PostController',
        controllerAs: 'postVM'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
