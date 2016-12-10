(function () {
    'use strict';

    angular.module('IotAdmin.pages.dispositivos')
        .directive('deviceList', DeviceList);

    /** @ngInject */
    function DeviceList() {
        return {
            restrict: 'EA',
            controller: 'deviceListCtrl',
            templateUrl: 'app/pages/dispositivos/deviceList/deviceList.html'
        };
    }
})();