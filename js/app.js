angular.module('JackApp', ['ngRoute',  'RouteControllers']);
 
angular.module('JackApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/electrician', {
        templateUrl: 'templates/electrician.html',
        controller: 'ElectricianController'
    })
    .when('/engineer', {
        templateUrl: 'templates/engineer.html',
        controller: 'EngineerController'
    });
});