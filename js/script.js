(function (angular) {
    'use strict'; angular.module('body', [])
        //.service('Horario', function ($http) {
        //    this.getAll = function (success, failure) {
        //        $http.get('http://localhost:3000/horario')
        //        success(success); error(failure);
        //        console.log(success);
        //    }
        //})

    .controller('MyController', ['$scope', function ($scope) {

        //Horario.getAll(function (data) {
        //    $scope.horario = data.horario;
        //})

        $scope.calcular = function () {
            alert($scope.timeZone);
            alert($scope.hora);
        };


        $scope.getHorarios = function () {
            $.ajax({
                type: "GET",
                url: "http://localhost:3000/horario",
                dataType: "json",
                cache: false,
                async: false,
                success: function (response) {
                    alert(JSON.stringify(response));
                },
                error: function (request, status, error) {
                    alert(status + " : " + error);
                }
            }); 
            }
    }]);
})(window.angular);
  