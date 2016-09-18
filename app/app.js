(function () {
  'use strict';

  angular
    .module('sampleApp', ['ui.router'])
    .config(appConfig)
    .run(appRun);

    function appConfig ($stateProvider) {
      $stateProvider
        .state('landing', {
          url: '/',
          controller: 'LandingController',
          controllerAs: '$ctrl',
          templateUrl: 'app/states/landing/landing.html'
        });
    }

    function appRun ($rootScope) {
      console.log('tokn');
      $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams){
        console.log('stateChangeError', event);
      });
    }
})();
