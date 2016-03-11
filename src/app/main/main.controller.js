(function() {
  'use strict';

  angular
    .module('recho')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $timeout, DATA_SUBMISSIONS) {
    var vm = this;

    vm.data = {
      submissions: null
    };

    vm.states = {
      loading: true
    };

    _activate();

    function _activate() {

      $timeout(function() {
        _loadFeed();
      }, 1800);

    }

    function _loadFeed() {
      vm.data.submissions = DATA_SUBMISSIONS.submissions;
      vm.states.loading = false;
    }

  }
})();
