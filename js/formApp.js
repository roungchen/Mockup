var formApp = angular.module('formApp', []);

formApp.controller('RegistrationController', ['$scope', function($scope) {

	var requestForm = this;

	$scope.title_list = ["Mr.", "Mrs.","Miss","Dr.","Ms."];

 	$scope.checkboxMediaType = {
       'logo' : false,
       'photo' : false,
       'advertising' : false,
       'other' : false
     };

}]);


