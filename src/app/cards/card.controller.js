(function() {
  'use strict';

  angular
    .module('recho.cards.controllers')
    .controller('CardController', CardController);

  /** @ngInject */
  function CardController($log, $scope) {
    var vm = this;

    vm.submission = $scope.submission;

    vm.states = {
      less: false,
      more: false,
      starred: false
    };

    vm.lessLikeThis = lessLikeThis;
    vm.moreLikeThis = moreLikeThis;
    vm.toggleStar = toggleStar;

    function lessLikeThis() {
      if(!vm.states.less) {
        vm.states.more = false;
      }
      vm.states.less = !vm.states.less;
    }

    function moreLikeThis() {
      if(!vm.states.more) {
        vm.states.less = false;
      }
      vm.states.more = !vm.states.more;
    }

    function toggleStar() {
      if(vm.states.starred) {
        vm.submission.starred_count--;
      } else {
        vm.submission.starred_count++;

        if(!vm.states.less && !vm.states.more) {
          moreLikeThis();
        }

      }
      vm.states.starred = !vm.states.starred;
    }

  }
})();
