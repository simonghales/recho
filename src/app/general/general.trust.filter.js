
(function () {
  'use strict';

  angular
    .module('recho.general.filters')
    .filter('trustAsResourceUrl', trustAsResourceUrl);

  function trustAsResourceUrl($sce) {

    return function(val) {
      return $sce.trustAsResourceUrl(val);
    };

  }

})();
