angular.module('JackApp', ['ngRoute',  'RouteControllers']);
 
angular.module('JackApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
    })
    .when('/portfolio', {
        templateUrl: 'templates/portfolio.html',
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
    });
});