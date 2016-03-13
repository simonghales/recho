(function() {
  'use strict';

  angular
    .module('recho.post.controllers')
    .controller('PostController', PostController);

  /** @ngInject */
  function PostController($log, $timeout, DATA_SUBMISSIONS, DATA_COMMENTS) {
    var vm = this;

    vm.data = {
      comments: null,
      submission: null
    };

    vm.states = {
      comments: {
        loading: true
      },
      loading: true
    };

    _activate();

    function _activate() {

      $timeout(function() {
        _loadSubmission();
      }, 300);

      $timeout(function() {
        _loadComments();
      }, 0);

    }

    function _loadComments() {
      vm.data.comments = DATA_COMMENTS.comments;
      $log.debug("comments", vm.data.comments);
      vm.states.comments.loading = false;
    }

    function _loadSubmission() {
      vm.data.submission = DATA_SUBMISSIONS.submissions[0];
      vm.states.loading = false;
    }

  }
})();
