(function () {
    'use strict';

    angular.module('IotAdmin.pages.dispositivos')
        .directive('device', disp);

    /** @ngInject */
    function disp() {
        return {
            restrict: 'EA',
            controller: 'deviceCtrl',
            templateUrl: 'app/pages/dispositivos/device/device.html',
            scope : {
                name : "@name"
            }
        };
    }
})();