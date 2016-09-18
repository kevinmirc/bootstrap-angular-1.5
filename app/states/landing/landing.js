(function () {
  'use strict';

  angular
    .module('sampleApp')
    .controller('LandingController', landingController);

    function landingController () {
      var ctrl = this;

      ctrl.stuff = "stuff";
    }
})();
