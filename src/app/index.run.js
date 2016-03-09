(function() {
  'use strict';

  angular
    .module('recho')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
