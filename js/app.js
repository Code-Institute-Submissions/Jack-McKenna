angular.module('JackApp', ['ngRoute',  'RouteControllers']);
 
angular.module('JackApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
    })
    .when('/about', {
        templateUrl: 'templates/about.html',
        controller: 'AboutController',
    })
    .when('/portfolio', {
        templateUrl: 'templates/portfolio.html',
        controller: 'PortfolioController',
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
    });
});