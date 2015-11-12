(function () {
    var app = angular.module('modone', []);
    
    app.controller('plan_control', 
    	function($scope,$http){
	  $scope.blueprints = [];
	  $scope.blueprint;

	  $scope.loadData = function() {
	     var configList = {
	  	 method: "GET",
		 url: "blueprints"
	     };

	     var response=$http(configList);

	     response.success(function(data, status, headers, config) {
		 $scope.blueprints = data;
	  });

	  response.error(function(data, status, headers, config) {
	     alert("The petition has failed. HTTP Status:"+status);
	  });
	};

	    $scope.ConsultarPlano = function(){
	      var cnv= document.getElementById("myCanvas");
	      var ctx = cnv.getContext("2d");
		$http({
		    method: "GET",
		    url: "blueprints/"+$scope.blueprint
		}).success(function(data) {
		   $scope.entries = data;
		}).error(function(data,status,headers,config) {
	 	   alert("Ha fallado la petición. Estado HTTP:"+status);
		});
	    };
	}
    );	
})();









