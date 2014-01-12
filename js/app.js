var app = angular.module('app', []).config(function($routeProvider) {

/*App Routes*/

	$routeProvider.when('/home',{
		templateUrl: 'templates/home.html',
		controller: 'homeController'
	});

	$routeProvider.when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'aboutController'
	});

	$routeProvider.when('/members', {
		templateUrl: 'templates/members.html',
		controller: 'membersController'
	});

	$routeProvider.when('/press', {
		templateUrl: 'templates/press.html',
		controller: 'pressController'
	}); 

	$routeProvider.otherwise({redirectTo : '/home'});
});

/*Page Controllers*/

app.controller('homeController', function(){

});

app.controller('aboutController', function(){

});

app.controller('membersController', function(){

});
app.controller('pressController', function(){

});