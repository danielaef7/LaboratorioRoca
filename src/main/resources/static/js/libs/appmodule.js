(function () {
    var app = angular.module('modone', []);

    app.controller('plan_control',
            function ($scope, $http) {
                $scope.blueprints = [];
                $scope.blueprint = {figura: "nombre"};

                $scope.loadData = function () {
                    var configList = {
                        method: "GET",
                        url: "blueprints"
                    };

                    var response = $http(configList);

                    response.success(function (data, status, headers, config) {
                        $scope.blueprints = data;
                    });

                    response.error(function (data, status, headers, config) {
                        alert("The petition has failed. HTTP Status:" + status);
                    });
                };
                $scope.loadData();

                $scope.ConsultarPlano = function () {
                    var configList = {
                        method: "GET",
                        url: "blueprints/" + $scope.blueprint.figura
                    };
                    var cnv = document.getElementById("myCanvas");
                    var ctx = cnv.getContext("2d");
                    
                    var response = $http(configList);

                    response.success(function (data, status, headers, config) {
                        $scope.blueprints = data;
                        var punto = data.points;
                        
                        for (i = 0; punto.length; i++) {
                            ctx.moveTo(punto[i].x, punto[i].y);
                            ctx.lineTo(punto[(i + 1) % punto.length].x, punto[(i + 1) % punto.length].y);
                            ctx.stroke();
                           
                        }                       
                    });
                };
            }
    );
})();









