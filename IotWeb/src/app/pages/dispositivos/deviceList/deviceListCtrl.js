(function () {
    'use strict';

    angular.module('IotAdmin.pages.dispositivos')
        .controller('deviceListCtrl', DeviceCtrl);

    /** @ngInject */
    function DeviceCtrl($scope, $timeout, baConfig, baUtil) {
        //$scope.dispositivos = dispositivos;
        $scope.devices = [{name:"Foco 1"},{name:"Foco 2"}];
    }
})();