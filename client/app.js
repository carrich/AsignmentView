var myApp = angular.module('myApp',['ngRoute','angularUtils.directives.dirPagination']);
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl:'templates/list2.html',
			controller:'empController'
		})
		.when('/employees', {
			templateUrl:'templates/list2.html',
			controller:'empController'
		})
		.when('/employees12', {
			templateUrl:'templates/new.html',
			controller:'empController'
		})
		.when('/employees/create', {
			templateUrl:'templates/add.html',
			controller:'empController'
		})
		.when('/employees/:id/edit', {
			templateUrl:'templates/edit.html',
			controller:'empController'
		})
		.when('/employees/:id/show', {
			templateUrl:'templates/show.html',
			controller:'empController'
		});
});
//