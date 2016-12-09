(function () {
    'use strict';

    angular.module('IotAdmin.pages.dispositivos', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('dispositivos', {
                url: '/dispositivos',
                templateUrl: 'app/pages/dispositivos/dispositivos.html',
                title: 'Dispositivos',
                sidebarMeta: {
                    icon: 'ion-cube',
                    order: 2,
                },
            });
    }

})();