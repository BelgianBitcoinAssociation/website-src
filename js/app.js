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

app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
  $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
    $location.hash($routeParams.scrollTo);
    $anchorScroll();  
  });
})








/*Page Controllers*/
app.controller('scrollController', function($scope, $location, $anchorScroll, $routeParams)
	{

	// $scope.gotoMain = function (){
 //    // set the location.hash to the id of
 //    // the element you wish to scroll to.
 //    $location.hash('main'); // use the id attribute
    
 //    // call $anchorScroll()
 //    $anchorScroll();
 //  	}

	// $scope.gotoSupport = function (){
 //    // set the location.hash to the id of
 //    // the element you wish to scroll to.
 //    ; // use the id attribute
    
 //    // call $anchorScroll()
 //    $anchorScroll($location.hash('support'));
 //  	}

	// $scope.gotoRepresent = function (){
 //    // set the location.hash to the id of
 //    // the element you wish to scroll to.
 //    $location.hash('Represent'); // use the id attribute
    
 //    // call $anchorScroll()
 //    $anchorScroll();
 //  	}

	// $scope.gotoClarify = function (){
 //    // set the location.hash to the id of
 //    // the element you wish to scroll to.
 //    $location.hash('clarify'); // use the id attribute
    
 //    // call $anchorScroll()
 //    $anchorScroll();
 //  	}  

});




app.controller('homeController', function($scope, $location){





	// this controller is supposed to set the menu item to active. It doesn't work
	window.scope = $scope;
	$scope.isActive = function (viewLocation) {
		return viewLocation === $location.path();
	};





});

app.controller('aboutController', function($scope, $location){

});

app.controller('membersController', function($scope, $location){

});

app.controller('pressController', function($scope, $location){

});

/*Directives*/

