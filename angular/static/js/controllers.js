


var phonecatControllers = angular.module('phonecatControllers', []);
 
phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', PhoneListCtrl]);
 
phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone', PhoneDetailCtrl]);



function PhoneListCtrl($scope, Phone){
	/*
	$http.get('static/phones.json').success(function(data) {
    	$scope.phones = data;
    });
    */
 	$scope.phones = Phone.query();
    $scope.orderProp = 'age';
}

function PhoneDetailCtrl($scope, $routeParams, Phone){
	//$scope.phoneId = $routeParams.phoneId;
	$scope.phone = Phone.get({phoneId: $routeParams.phoneId});
}