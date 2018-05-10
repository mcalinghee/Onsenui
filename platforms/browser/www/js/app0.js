document.addEventListener('deviceready', function(){
		// Code launching the app
}, false)

var app = angular.module('app', ['ngRoute']);

// https://docs.angularjs.org/guide/migration#commit-aa077e8
app.config(['$locationProvider', function($locationProvider) {
	  $locationProvider.hashPrefix('');
	}]);

app.config(function($routeProvider){
	$routeProvider
		.when('/home', {templateUrl: 'partials/home.html'})
		.when('/about', {templateUrl: 'partials/about.html'})
		.otherwise({redirectTo: '/home'})
})
