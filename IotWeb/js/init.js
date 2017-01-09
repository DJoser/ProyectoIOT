(function ($) {
    $(function () {

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

var app = angular.module('iotApp', ["ngRoute"]);

app.controller('mainCtrl', function ($scope) {
});

app.controller('tutorialCtrl', function ($scope) {
});

app.controller('dashboardCtrl', function ($scope) {
});

app.controller('dipositivosCtrl', function ($scope) {
    $scope.notas = [
        {titulo: 'learn angular', contenido: "Contenido de la nota 1"},
        {titulo: 'build an angular app', contenido: "Contenido de la nota 2"}
    ];

    $scope.addNote = function () {
        $scope.notas.push({text: $scope.todoText, done: false});
        $scope.todoText = '';
    };

    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.notas, function (todo) {
            count++;
        });
        return count;
    };

    $scope.archive = function () {
        var oldTodos = $scope.notas;
        $scope.notas = [];
        angular.forEach(oldTodos, function (todo) {
            //if (!todo.done) notasList.notas.push(todo);
        });
    };
});
app.config(function ($routeProvider,$locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "pages/tutorial.html",
            controller: "tutorialCtrl"
        })
        .when("/dashboard", {
            templateUrl: "pages/dashboard.html",
            controller: "dashboardCtrl"
        })
        .when("/dispositivos", {
            templateUrl: "pages/dispositivos.html",
            controller: "dipositivosCtrl"
        })
        .when("/eventos", {
            templateUrl: "pages/eventos.html",
            controller: "eventosCtrl"
        })
        .when("/configuracion", {
            templateUrl: "pages/configuracion.html",
            controller: "eventosCtrl"
        });

    $routeProvider.otherwise( { redirectTo: '/' });

    $locationProvider.hashPrefix('!');
});

