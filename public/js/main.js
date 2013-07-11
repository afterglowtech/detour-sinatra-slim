require.config({
  baseUrl: 'js',
  paths: {
    'angular-detour': 'lib/angular-detour.amd'
  }
});

require( [
  'app'
], function(app) {
  'use strict';
  angular.element(document).ready(function() {
    angular.bootstrap(document.documentElement, [app['name'], function(){
    }]);
  });
});
