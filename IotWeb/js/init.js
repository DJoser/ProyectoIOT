(function($){
  $(function(){

    $('.button-collapse').sideNav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

angular.module('editorApp', [])
    .controller('notasController', function($scope) {
        $scope.notas = [
            {titulo:'learn angular',contenido:"Contenido de la nota 1"},
            {titulo:'build an angular app', contenido:"Contenido de la nota 2"}
        ];

        $scope.addNote = function() {
            $scope.notas.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.notas, function(todo) {
                count++;
            });
            return count;
        };

        $scope.archive = function() {
            var oldTodos = $scope.notas;
            $scope.notas = [];
            angular.forEach(oldTodos, function(todo) {
                //if (!todo.done) notasList.notas.push(todo);
            });
        };
    });

