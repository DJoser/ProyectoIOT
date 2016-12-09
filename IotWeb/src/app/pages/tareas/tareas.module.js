(function () {
    'use strict';

    angular.module('IotAdmin.pages.inicio', [])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('inicio', {
                url: '/inicio',
                templateUrl: 'app/pages/tareas/tareas.html',
                title: 'Inicio',
                sidebarMeta: {
                    icon: 'ion-ios-compose-outline',
                    order: 2,
                },
            });
    }

})();