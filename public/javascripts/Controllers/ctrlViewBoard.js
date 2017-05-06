angular.module('myApp').controller('ctrlViewBoard', ['$scope', '$uibModal', '$log', '$http', function($scope, $uibModal, $log, $http){

	$scope.init = function() {
	    $http.get('/api/userPins')
	    .success(function (result){
	      $scope.pins = result;
	    })
	    .error(function (data, status){
	      console.log(data);
	    });

	    $http.get('/api/userInfo')
	    .success(function (result){
	      $scope.user = result;
	    })
	    .error(function (data, status){
	      console.log(data);
	    });

	};



	$scope.test = function(pin){

		console.log(pin);
	};

}]); 
