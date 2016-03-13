(function() {
  'use strict';

  angular
    .module('recho.comments.controllers')
    .controller('CommentController', CommentController);

  /** @ngInject */
  function CommentController($log) {
    var vm = this;

    vm.data = {
      points: getRandomInt(5,143),
      voteOffset: 0
    }

    vm.models = {
      reply: ''
    };

    vm.states = {
      downvoted: false,
      replying: false,
      upvoted: false
    };

    vm.closeReply = closeReply;
    vm.openReply = openReply;
    vm.toggleDownvote = toggleDownvote;
    vm.toggleUpvote = toggleUpvote;

    _activate();

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function closeReply() {
      vm.states.replying = false;
    }

    function openReply() {
      vm.states.replying = true;
    }

    function toggleDownvote() {
      vm.states.upvoted = false;
      vm.states.downvoted = !vm.states.downvoted;

      if(vm.states.downvoted) {
        vm.data.voteOffset = -1;
      } else {
        vm.data.voteOffset = 0;
      }

    }

    function toggleUpvote() {
      vm.states.downvoted = false;
      vm.states.upvoted = !vm.states.upvoted;

      if(vm.states.upvoted) {
        vm.data.voteOffset = 1;
      } else {
        vm.data.voteOffset = 0;
      }

    }

    function _activate() {

    }

  }
})();
