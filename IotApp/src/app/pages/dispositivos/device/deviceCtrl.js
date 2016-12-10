(function () {
    'use strict';

    angular.module('IotAdmin.pages.dispositivos')
        .controller('deviceCtrl', DeviceCtrl);

    /** @ngInject */
    function DeviceCtrl($scope, $timeout, baConfig, baUtil) {
        //$scope.dispositivos = dispositivos;
        $scope.name = "Ramon";
    }
})();