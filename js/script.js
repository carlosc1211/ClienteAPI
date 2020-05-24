(function (angular) {
    'use strict'; angular.module('body', [])
        

    .controller('MyController', ['$scope', function ($scope) {

       
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
        };

        $scope.postHorarios = function () {
            $scope.datos = $scope.hora+","+$scope.timeZone;

            alert($scope.datos);

            /* $.ajax({
                type: "POST",
                url: "",
                dataType: "json",
                cache: false,
                async: false,
                success: function (response) {
                    alert(JSON.stringify(response));
                },
                error: function (request, status, error) {
                    alert(status + " : " + error);
                }
            }); */ 
        }
    }]);
})(window.angular);
  